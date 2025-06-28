import { RadioGroupItem } from "../../../components/ui/radio-group-check";
import cn from "../../../utils";
import { Users } from "lucide-react";

const RoleSelector = ({
  isSelected,
  role,
}: {
  isSelected: boolean;
  role: string;
}) => {
  return (
    <label
      htmlFor={role}
      className={cn(
        "flex items-start gap-3 border relative text-sm p-4 cursor-pointer rounded-lg",
        isSelected
          ? "text-[#9E77ED]"
          : "bg-white text-gray-500  border-gray-200"
      )}
    >
      <div className="bg-white px-3.5 py-1 border border-gray-100 rounded-md">
        <Users className="text-gray-500" />
      </div>
      <RadioGroupItem
        value={role}
        id={role}
        className="absolute top-4 right-4"
      />
      <div className=" -mt-1">
        <p
          className={cn(
            "font-medium cursor-pointer",
            isSelected ? "text-[#53389E]" : "text-gray-700 "
          )}
        >
          {role}
        </p>
        <p>Last active 01/2023</p>
        <p className="mt-2">
          <span>Set as default</span>
          <span className="text-[#6941C6] font-medium ml-3">Edit</span>
        </p>
      </div>
    </label>
  );
};

export default RoleSelector;
