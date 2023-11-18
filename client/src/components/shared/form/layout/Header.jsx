import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    toast.success("Logout Successfully");
    navigate("/login");
  };
  return (
    <div className="bg-indigo-200 flex justify-between">
      <div className="brand-name">
        <h1>BloodBank</h1>
      </div>
      <div className="right-part flex items-center">
        <div className="user">
          <FaUserCircle />
          <span>{user && user.name}</span>
          {/* or we can use it also */}
          {/* <span>{user?.name}</span> */}
        </div>
        <div>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
