import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/csrf';
import Cookies from 'js-cookie';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8082/api/auth/signout');
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div>
      <p>Dashboard</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
