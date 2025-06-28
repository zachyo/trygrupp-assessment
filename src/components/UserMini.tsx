import { LogOut } from "lucide-react";
import img from "../assets/Avatar.png";

const UserMini = () => {
  return (
    <div className="border-t border-gray-200 mt-6 text-sm text-gray-500 px-4">
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={img} alt="" className="h-10" />
          <div className="">
            <p className="text-gray-900">Olivia Rhye</p>
            <p>olivia@untitledui.com</p>
          </div>
        </div>
        <LogOut />
      </div>
    </div>
  );
};

export default UserMini;
