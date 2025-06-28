import { useState } from "react";
import img from "../assets/Image (1).png";

const NewFeature = () => {
  const [show, setShow] = useState(true);

  if (!show) return;
  return (
    <div className="bg-gray-50 p-4 rounded-lg text-sm">
      <p className="font-medium text-gray-900 mb-1">New features available!</p>
      <p className="text-gray-500">
        Check out the new dashboard view. Pages now load faster.{" "}
      </p>
      <img src={img} alt="image" className="my-4 rounded-md" />
      <p className="text-gray-500">
        <span className="cursor-pointer" onClick={() => setShow(false)}>
          Dismiss
        </span>{" "}
        <span className="ml-3 text-[#6941C6]">What's new?</span>
      </p>
    </div>
  );
};

export default NewFeature;
