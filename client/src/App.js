import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Roles from './Pages/Roles';
import ImageUpload from './Pages/ImageUpload';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Roles" element={<Roles />} />
          <Route path="/img" element={<ImageUpload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
