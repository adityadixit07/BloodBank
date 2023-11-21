import Header from "./Header";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div className="flex main-layout">
          <div className=" sidebar w-1/4 bg-gray-100 p-10 h-[100vh]">
            <Sidebar />
          </div>
          <div className="childrens w-3/4 bg-white p-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
