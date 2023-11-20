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
                key={menu.name}
              >
                <Link
                  to={menu.path}
                  className={`${
                    isActive ? "text-orange-700 text-xl font-semibold" : "text-xl font-semibold"
                  } `}
                >
                  {menu.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
