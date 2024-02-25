import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Fuel = () => {
  const [fuels, setFuels] = useState([]);
  const [name, setName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState('');

  useEffect(() => {
    handleGetAllFuels();
  }, []);

  const handleCreateFuel = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8082/api/fuel/createFuel',
        { name },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
          },
        }
      );

      if (response.status === 201) {
        handleGetAllFuels();
        setName('');
      } else {
        console.error('Failed to create fuel:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating fuel:', error);
    }
  };

  const handleDeleteFuel = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8082/api/fuel/deleteFuel/${id}`, {
        headers: {
          'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
        },
      });

      if (response.status === 200) {
        handleGetAllFuels();
      } else {
        console.error('Failed to delete fuel:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting fuel:', error);
    }
  };

  const handleEditFuelName = (id, currentName) => {
    setEditingId(id);
    setEditingName(currentName);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleUpdateName = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:8082/api/fuel/editFuelName/${id}`,
        { name: editingName },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
          },
        }
      );

      if (response.status === 200) {
        console.log('Fuel name updated successfully:', response.data);
        handleGetAllFuels();
        setEditingId(null);
      } else {
        console.error('Failed to update fuel name:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating fuel name:', error);
    }
  };

  const handleGetAllFuels = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api/fuel/getAllFuels');
      setFuels(response.data);
      console.log('Fetched fuels successfully:', response.data);
    } catch (error) {
      console.error('Error fetching fuels:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Fuel</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleCreateFuel(); }}>
        <label>
          Name of Fuel:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Create Fuel</button>
      </form>

      <h2>All Fuels</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name of Fuel</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fuels.map((fuel) => (
            <tr key={fuel.id}>
              <td>{fuel.id}</td>
              <td>
                {editingId === fuel.id ? (
                  <>
                    <input
                      type="text"
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                    />
                    <button onClick={() => handleUpdateName(fuel.id)}>Update</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  fuel.name
                )}
              </td>
              <td>
                <button onClick={() => handleEditFuelName(fuel.id, fuel.name)}>Edit Name</button>
                <button onClick={() => handleDeleteFuel(fuel.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fuel;
