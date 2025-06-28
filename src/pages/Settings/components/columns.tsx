"use client";

import type { ColumnDef } from "@tanstack/react-table";
import cn from "../../../utils";
import { CloudDownload } from "lucide-react";
import StatusBadge from "../../../components/ui/status";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Role = {
  id: number;
  name: string;
  type: string;
  date: string;
  status: string;
  users: string[];
  totalUser: 7;
};
export const columns: ColumnDef<Role>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllPageRowsSelected()}
        onChange={(e) => table.toggleAllPageRowsSelected(e.target.checked)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={(e) => row.toggleSelected(e.target.checked)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "date",
    header: "Date created",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return <StatusBadge status={status?.toLowerCase()} />;
    },
  },
  {
    accessorKey: "users",
    header: "Role users",
    cell: ({ row }) => {
      const users = row.getValue("users") as string[];
      if (!users || users.length === 0) return <p>No users</p>;
      return (
        <div className="flex">
          {users.map((user, i) => (
            <img
              src={user}
              alt="user"
              className={cn(
                "rounded-full h-10 w-10 border-2 border-white",
                i > 0 && "-ml-3"
              )}
            />
          ))}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return <CloudDownload className="cursor-pointer" />;
    },
  },
];
