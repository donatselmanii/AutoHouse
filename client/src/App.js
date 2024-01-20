import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Roles from './Pages/Roles';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Roles" element={<Roles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
