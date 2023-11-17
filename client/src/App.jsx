import { Routes, Route } from "react-router-dom";
import Register from "./components/pages/auth/Register";
import Login from "./components/pages/auth/Login";
import HomePage from "./components/pages/HomePage";
import './index.css'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
