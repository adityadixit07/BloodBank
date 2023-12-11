import { Link } from "react-router-dom";
import { MdOutlineInventory } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaCaretSquareDown, FaRegHospital } from "react-icons/fa";
import { VscOrganization } from "react-icons/vsc";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <div className="sidebar">
        <div className="flex  flex-col justify-center pt-[90%] gap-10">
          {user?.role === "organisation" && (
            <>
              <div className="flex items-center gap-4 text-xl font-semibold text-emerald-900">
                <MdOutlineInventory size={30} color="green" />
                <Link to="/" className="menu-item">
                  Inventory
                </Link>
              </div>
              <div className="flex items-center gap-4 text-xl font-semibold text-emerald-900">
                <BiSolidDonateHeart size={30} color="green" />
                <Link to="/donar" className="menu-item">
                  Donar
                </Link>
              </div>
              <div className="flex items-center gap-4 text-xl font-semibold text-emerald-900">
                <FaRegHospital size={30} color="green" />
                <Link to="/hospital" className="menu-item">
                  Hospital
                </Link>
              </div>
            </>
          )}
          {(user?.role === "donar" || user?.role === "hospital") && (
            <div className="flex items-center gap-4 text-xl font-semibold text-emerald-900">
              <VscOrganization size={30} color="green" />
              <Link to="/organisation" className="menu-item">
                Organisation
              </Link>
            </div>
          )}
          {user?.role === "hospital" && (
            <div className="flex items-center gap-4 text-xl font-semibold text-emerald-900">
              <FaCaretSquareDown size={30} color="green" />
              <Link to="/consumer" className="menu-item">
                Consumer
              </Link>
            </div>
          )}
          {user?.role === "donar" && (
            <div className="flex items-center gap-4 text-xl font-semibold text-emerald-900">
              <FaCaretSquareDown size={30} color="green" />
              <Link to="/donation" className="menu-item">
                Donation
              </Link>
            </div>
          )}

          {user?.role === "admin" && (
            <>
              <div className="flex items-center gap-4 text-xl font-semibold text-emerald-900">
                <MdOutlineInventory size={30} color="green" />
                <Link to="/donar-list" className="menu-item">
                  Donars List
                </Link>
              </div>{" "}
              <div className="flex items-center gap-4 text-xl font-semibold text-emerald-900">
                <MdOutlineInventory size={30} color="green" />
                <Link to="/hospital-list" className="menu-item">
                  Hospitals List
                </Link>
              </div>
              <div className="flex items-center gap-4 text-xl font-semibold text-emerald-900">
                <MdOutlineInventory size={30} color="green" />
                <Link to="/organisation-list" className="menu-item">
                  Organisations List
                </Link>
              </div>
            </>
          )}

          {/* {userMenu.map((menu) => {
            const isActive = location.pathname === menu.path;
            return (
              <div
                className={`menu-item ${isActive && "active"} pt-10`}
                key={menu.name}
              >
                <Link
                  to={menu.path}
                  className={`${
                    isActive
                      ? "text-orange-700 text-xl font-semibold"
                      : "text-xl font-semibold"
                  } `}
                >
                  {menu.name}
                </Link>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
