import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/Logo.svg";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  ChartNoAxesColumn,
  ChevronsLeft,
  Flag,
  House,
  Layers,
  LifeBuoy,
  Settings,
  Users,
} from "lucide-react";
import NewFeature from "../../components/NewFeature";
import UserMini from "../../components/UserMini";

const linkClasses = "px-3 py-2 flex items-center gap-3 cursor-pointer pl-5";

type SideBarProps = {
  setShowSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
  showSideBar: boolean;
};

export const SideBar = ({ setShowSidebar, showSideBar }: SideBarProps) => {
  const [sideBarStyle, setSideBarStyle] = useState("");

  useEffect(() => {
    const handleStyle = () => {
      if (window.innerWidth > 1024) {
        setSideBarStyle("");
      } else setSideBarStyle("bg-white");
    };
    handleStyle();
    window.addEventListener("resize", handleStyle);

    return () => {
      window.removeEventListener("resize", handleStyle);
    };
  }, []);

  return (
    <div className={`${sideBarStyle} bg-white`}>
      <div className="w-[calc(100vw-50px)] md:w-68 pt-6 lg:pt-8 py-8 h-[100vh] lg:h-screen min-h-[calc(100vh-40px)] flex flex-col overflow-scroll  justify-between">
        <div className="flex-1">
          <div className="px-6  flex items-center justify-between">
            <img src={Logo} alt="logo" className="w-[137px]" />
            <ChevronsLeft
              className="cursor-pointer hover:bg-slate-100 p-1 lg:hidden rounded border border-black"
              onClick={() => setShowSidebar?.(false)}
              size={27}
              color="#000000"
            />
          </div>
          <div className="h-[calc(100vh-220px)] overflow-y-scroll mt-4">
            {/*=== sidebar top links ===*/}
            <div className="py-3 text-sm flex flex-col gap-1 px-3">
              {SidebarRoutes.map((layer, i) => (
                <div className="" key={i}>
                  <div className="flex gap-3 flex-col">
                    <SidebarLink
                      key={i}
                      item={layer}
                      setShowSidebar={setShowSidebar}
                      showSideBar={showSideBar}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="px-4">
              <NewFeature />
            </div>
          </div>
        </div>
        <UserMini />
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  item: {
    route: string;
    icon?: any;
    name: string;
    hideForUser?: boolean;
    subRouteLink?: boolean;
    badge?: React.ReactNode;
  };
}

const SidebarLink = ({
  item,
  setShowSidebar,
}: SidebarLinkProps & SideBarProps) => {
  const location = useLocation();
  const handleRouteSwitch = () => {
    if (window.innerWidth < 768) {
      setShowSidebar?.(false);
    }
  };

  const location_path = item.route.split("/").at(-1);

  return (
    <Link
      to={item.route}
      className={classNames(
        location.pathname.includes(location_path as string)
          ? `text-gray-900`
          : " text-gray-700",
        "flex items-center hover:bg-gray-50 relative text-sm font-semibold rounded-lg hover:text-gray-900"
      )}
      onClick={handleRouteSwitch}
      id={item.route}
    >
      {location.pathname.includes(location_path as string) && (
        <motion.span
          className={"absolute inset-0  bg-gray-50 rounded-lg text-[#22272F]"}
          layoutId="sidebar__links"
        />
      )}
      <span className={`${linkClasses} z-10`}>
        {item.icon && <item.icon />}
        {item.name}
      </span>
      <span className="z-10">{item?.badge}</span>
    </Link>
  );
};

const SidebarRoutes = [
  {
    name: "Home",
    icon: House,
    route: "home",
  },
  {
    name: "Dashboard",
    icon: ChartNoAxesColumn,
    route: "overview",
  },
  {
    name: "Projects",
    icon: Layers,
    route: "projects",
  },
  {
    name: "Reporting",
    icon: Flag,
    route: "reporting",
  },
  {
    name: "Users",
    icon: Users,
    route: "users",
  },
  {
    name: "Support",
    icon: LifeBuoy,
    route: "support",
  },
  {
    name: "Settings",
    icon: Settings,
    route: "settings",
  },
];

// export default SideBar<LifeBuoy />
