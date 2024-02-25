import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Roles from './pages/Roles';
import ImageUpload from './pages/ImageUpload';
import Makes from './pages/Makes';
import Types from './pages/Types';
import Fuel from './pages/Fuel';
import QuestionList from './pages/QuestionList';
import Testfile from './pages/Testfile';


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
          <Route path="/types" element={<Types />} />
          <Route path="/fuel" element={<Fuel />} />
          <Route path="/question" element={<QuestionList />} />
          <Route path="/test" element={<Testfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
