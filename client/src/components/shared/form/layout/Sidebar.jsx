import { Link, useLocation } from "react-router-dom";
import { userMenu } from "./userMenu";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div>
      <div className="sidebar">
        <div className="menu pt-[50%]">
          {userMenu.map((menu) => {
            const isActive = location.pathname === menu.path;
            return (
              <div
                className={`menu-item ${isActive && "active"} pt-10`}
                key={menu}
              >
                <Link to={menu.path} >{menu.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
