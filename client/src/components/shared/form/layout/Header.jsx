import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    toast.success("Logout Successfully");
    navigate("/login");
  };
  const location = useLocation();
  return (
    <div className="bg-violet-100 flex justify-between p-3 ">
      <div className="brand-name">
        <h1>BloodBank</h1>
      </div>
      <div className="right-part flex items-center gap-8">
        <div className="user flex items-center">
          <FaUserCircle />
          <span className="text-xl text-orange-500 flex items-center">
            welcome
            {user?.name || user?.organisationName || user?.hospitalName}
          </span>
          <span className="bg-gray-700 text-white p-2 rounded-md">
            {user?.role}
          </span>
          {location.pathname === "/" ? (
            <Link to={"/analytics"}>Analytics</Link>
          ) : (
            <Link to={"/"}>Home</Link>
          )}
        </div>
        <div>
          <button
            onClick={logout}
            className="bg-red-400 text-xl font-medium p-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
