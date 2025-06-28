import { CloudDownload, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { DataTable } from "../../../components/ReusableTable";
import { columns } from "./columns";
import axios from "axios";

const RolesTable = () => {
  const [roles, setRoles] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch roles data
  const fetchRoles = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        "https://gamma-api.vercel.app/api/roles"
      );
      setRoles(response.data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch roles");
      console.error("Error fetching roles:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  console.log(error);
  console.log(roles);
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center w-full">
        <p className="text-lg text-gray-900">User Roles</p>
        <button className="flex bg-white gap-2 items-center py-2.5 px-4 rounded-lg cursor-pointer border border-gray-300">
          <CloudDownload /> Download all
        </button>
      </div>
      <div className="container mx-auto py-10">
        {loading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <DataTable columns={columns} data={roles} />
        )}
      </div>
    </div>
  );
};

export default RolesTable;
