import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Roles from './pages/Roles';
import ImageUpload from './pages/ImageUpload';
import Makes from './pages/Makes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/img" element={<ImageUpload />} />
          <Route path="/makes" element={<Makes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
