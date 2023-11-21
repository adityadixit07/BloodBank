import { Routes, Route } from "react-router-dom";
import Register from "./components/pages/auth/Register";
import Login from "./components/pages/auth/Login";
import HomePage from "./components/pages/HomePage";
import "./index.css";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import PublicRoutes from "./components/routes/PublicRoutes";
import Donar from "./components/pages/dashboard/Donar";
import Hospital from "./components/pages/dashboard/Hospital";
import Organisation from "./components/pages/dashboard/Organisation";
const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoutes>
              <Register />
            </PublicRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/donar"
          element={
            <ProtectedRoute>
              <Donar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital"
          element={
            <ProtectedRoute>
              <Hospital />
            </ProtectedRoute>
          }
        />{" "}
        <Route
          path="/orgnaisation"
          element={
            <ProtectedRoute>
              <Organisation />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
