import { Link, useLocation } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import { BsInfoSquare, BsEnvelope } from "react-icons/bs";
import { FaTshirt, FaRedhat } from "react-icons/fa";

const Sidebar = ({ show, setter }) => {
  const location = useLocation();

  const className =
    "bg-black w-full md:w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
  const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

  const MenuItem = ({ icon, name, route }) => {
    const isActive = location.pathname === route;

    return (
      <Link to={route} onClick={() => setter((oldVal) => !oldVal)}>
        <div
          className={`flex items-center text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${
            isActive ? "text-white" : "text-white/50 hover:text-white"
          }`}
        >
          <div className="text-xl flex items-center w-[30px]">{icon}</div>
          <div>{name}</div>
        </div>
      </Link>
    );
  };

  const ModalOverlay = () => (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30 "
      onClick={() => setter((oldVal) => !oldVal)}
    />
  );

  return (
    <div>
      <>
        <div className={`${className}${appendClass} h-[100vh]`}>
          <div className="p-2 flex justify-center">
            <Link to="/">
              <img
                src="https://img-getpocket.cdn.mozilla.net/404x202/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2Fdc4b3d65-25b0-4def-8a74-182815f04254.jpeg"
                alt="Company Logo"
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div className="flex flex-col">
            <MenuItem name="Home" route="/" icon={<SlHome />} />
            <MenuItem name="T-Shirts" route="/t-shirts" icon={<FaTshirt />} />
            <MenuItem name="Hats" route="/hats" icon={<FaRedhat />} />
            <MenuItem name="About Us" route="/about" icon={<BsInfoSquare />} />
            <MenuItem name="Contact" route="/contact" icon={<BsEnvelope />} />
          </div>
        </div>
        {show && <ModalOverlay />}
      </>
    </div>
  );
};

export default Sidebar;
