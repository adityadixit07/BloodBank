import { useEffect } from "react";
import { getCurrentUser } from "../../redux/features/auth/authActions";
import API from "../../services/API";
import { useDispatch } from "react-redux";
// import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const response = await API.get("/auth/currentuser");
      const { data } = response;
      if (data?.success) {
        dispatch(getCurrentUser(data));
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  });

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return window.location.replace("/login");
    // return <Navigate  to={'/login'} />
  }
};

export default ProtectedRoute;
