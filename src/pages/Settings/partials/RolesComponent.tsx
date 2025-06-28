import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import RoleSelector from "../components/RoleSelector";
import { Plus } from "lucide-react";
import RolesTable from "../components/RolesTable";

const RolesComponent = () => {
  const [selectedRole, setSelectedRole] = useState("Superadmin");
  return (
    <div className="text-gray-500 text-sm pb-8 mt-7">
      <div className="pb-5">
        <p className="text-lg font-medium text-gray-900 mb-1">User Roles</p>
        <p>Update your roles details and information.</p>
      </div>
      <div className="flex gap-5 lg:gap-10 border-y pt-6 pb-5 border-gray-200 mb-5 flex-col lg:flex-row ">
        <div className="">
          <p className="font-medium text-gray-700">Connected email</p>
          <p>Select role account</p>
        </div>
        <div className="flex-1">
          <RadioGroup defaultValue="option-one">
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <div className=" -mt-1">
                <label
                  htmlFor="option-one"
                  className="text-gray-700 font-medium cursor-pointer"
                >
                  My account email
                </label>
                <p>olivia@untitledui.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <div className="flex flex-col -mt-1">
                <label
                  htmlFor="option-two"
                  className="text-gray-700 font-medium cursor-pointer"
                >
                  An alternative email
                </label>
                <input
                  type="text"
                  value={"billing@untitledui.com"}
                  className="border border-gray-600 bg-white rounded-md mt-3 px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="flex gap-5 lg:gap-8 flex-col lg:flex-row ">
        <div className="">
          <p className="font-medium text-gray-700">Active Role</p>
          <p>Select active role available to the user.</p>
        </div>
        <div className="flex-1">
          <RadioGroup
            defaultValue={selectedRole}
            onValueChange={setSelectedRole}
          >
            {["Superadmin", "Developeradmin", "Supportadmin"].map((item) => (
              <RoleSelector isSelected={item === selectedRole} role={item} />
            ))}
          </RadioGroup>
          <button className="flex gap-2 items-center text-sm mt-4">
            <Plus size={16} /> Add role to user
          </button>
        </div>
      </div>
      <RolesTable />
    </div>
  );
};

export default RolesComponent;
