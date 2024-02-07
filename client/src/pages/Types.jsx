import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Types = () => {
  const [types, setTypes] = useState([]);
  const [nameType, setNameType] = useState('');
  const [numberOfCars, setNumberOfCars] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState('');
  const [editingNumberOfCars, setEditingNumberOfCars] = useState('');
  const [editingType, setEditingType] = useState(null);

  useEffect(() => {
    handleGetAllTypes();
  }, []);

  const handleCreateType = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8082/api/type/createType',
        { nameType },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
          },
        }
      );

      if (response.status === 201) {
        handleGetAllTypes();
        setNameType('');
      } else {
        console.error('Failed to create type:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating type:', error);
    }
  };

  const handleDeleteType = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8082/api/type/deleteType/${id}`, {
        headers: {
          'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
        },
      });

      if (response.status === 200) {
        handleGetAllTypes();
      } else {
        console.error('Failed to delete type:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting type:', error);
    }
  };

  const handleEditTypeName = (id, currentName) => {
    setEditingId(id);
    setEditingName(currentName);
    setEditingType('name');
  };

  const handleEditNumberOfCars = (id, currentNumberOfCars) => {
    setEditingId(id);
    setEditingNumberOfCars(currentNumberOfCars);
    setEditingType('numberOfCars');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingType(null);
  };

  const handleUpdateName = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:8082/api/type/editTypeName/${id}`,
        { nameType: editingName },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
          },
        }
      );

      if (response.status === 200) {
        handleGetAllTypes();
        setEditingId(null);
        setEditingType(null);
      } else {
        console.error('Failed to update type name:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating type name:', error);
    }
  };

  const handleUpdateNumberOfCars = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:8082/api/type/editNumberOfCars/${id}`,
        { numberOfCars: editingNumberOfCars },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
          },
        }
      );

      if (response.status === 200) {
        handleGetAllTypes();
        setEditingId(null);
        setEditingType(null);
      } else {
        console.error('Failed to update number of cars:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating number of cars:', error);
    }
  };

  const handleGetAllTypes = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api/type/getAllTypes');
      setTypes(response.data);
    } catch (error) {
      console.error('Error fetching types:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Type</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleCreateType(); }}>
        <label>
          Name of Type:
          <input
            type="text"
            value={nameType}
            onChange={(e) => setNameType(e.target.value)}
          />
        </label>
        <button type="submit">Create Type</button>
      </form>

      <h2>All Types</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name of Type</th>
            <th>Number of Cars</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {types.map((type) => (
            <tr key={type.id}>
              <td>{type.id}</td>
              <td>
                {editingId === type.id && editingType === 'name' ? (
                  <>
                    <input
                      type="text"
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                    />
                    <button onClick={() => handleUpdateName(type.id)}>Update</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  type.nameType
                )}
              </td>
              <td>
                {editingId === type.id && editingType === 'numberOfCars' ? (
                  <>
                    <input
                      type="text"
                      value={editingNumberOfCars}
                      onChange={(e) => setEditingNumberOfCars(e.target.value)}
                    />
                    <button onClick={() => handleUpdateNumberOfCars(type.id)}>Update</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  type.numberOfCars
                )}
              </td>
              <td>
                <button onClick={() => handleEditTypeName(type.id, type.nameType)}>Edit Name</button>
                <button onClick={() => handleEditNumberOfCars(type.id, type.numberOfCars)}>Edit Cars</button>
                <button onClick={() => handleDeleteType(type.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Types;
