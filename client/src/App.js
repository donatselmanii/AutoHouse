import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Roles from './Pages/Roles';
import ImageUpload from './Pages/ImageUpload';
import Makes from './Pages/Makes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/img" element={<ImageUpload />} />
          <Route path="/makes" element={<Makes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
