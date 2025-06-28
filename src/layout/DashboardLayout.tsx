import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import Logo from "../assets/Logo.svg";
import { Menu } from "lucide-react";

const DashboardLayout = () => {
  const [showSideBar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setShowSidebar(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (location.pathname === "/") {
    return <Navigate to="/settings" />;
  }

  return (
    <div className="w-screen h-screen flex justify-between flex-row overflow-hidden bg-gray-50">
      {showSideBar && (
        <div
          className="fixed inset-0 bg-black/65 bg-opacity-50 z-[51] lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
      <div
        className={`absolute lg:relative z-[100] transition-all  ${
          showSideBar ? "left-0 " : "-left-full"
        }`}
      >
        <SideBar setShowSidebar={setShowSidebar} showSideBar={showSideBar} />
      </div>
      <div className="w-full lg:flex-1  h-full overflow-scroll scroll-smooth">
        <div className="fixed w-full z-50 flex lg:hidden items-center justify-between p-4 bg-white border-b border-gray-200">
          <img src={Logo} alt="logo" className="w-[137px]" />
          <Menu
            className="p-2 rounded hover:bg-gray-100 text-black"
            onClick={() => setShowSidebar(!showSideBar)}
            size={40}
          />
        </div>
        <div className="py-8 md:px-8 px-4 pt-[73px] lg:pt-8">{<Outlet />}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
