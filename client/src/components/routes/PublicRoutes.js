const PublicRoutes = ({ children }) => {
  if (localStorage.getItem("token")) {
    window.location.replace("/");
  } else {
    return children;
  }
};

export default PublicRoutes;
