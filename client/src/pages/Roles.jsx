import React, { useState, useEffect } from 'react';
import axios from '../utils/csrf';
import Cookies from 'js-cookie';


function Roles() {
  const [roles, setRoles] = useState([]);
  const [newRoleName, setNewRoleName] = useState('');

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api/roles');
      setRoles(response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleCreateRole = async () => {
    try {

      const response = await axios.post(
        'http://localhost:8082/api/roles/createRole',
        {
          name: newRoleName,
        },
        {
          headers: {
            'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
          },
        }
      );
      setRoles([...roles, response.data]);
      setNewRoleName('');

      console.log('Role created successfully:', response.data);
    } catch (error) {
      console.error('Error creating role:', error);
    }
  };

  return (
    <div>
      <h2>Roles List</h2>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>{role.name}</li>
        ))}
      </ul>

      <h2>Create New Role</h2>
      <div>
        <label>
          Role Name:
          <input type="text" value={newRoleName} onChange={(e) => setNewRoleName(e.target.value)} />
        </label>
        <button onClick={handleCreateRole}>Create Role</button>
      </div>
    </div>
  );
}

export default Roles;