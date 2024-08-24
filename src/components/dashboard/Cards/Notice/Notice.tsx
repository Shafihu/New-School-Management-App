import { DialogDemo } from "@/components/Dialog";
import React from "react";
import { TableDemo } from "./Table";
import { DrawerDemo } from "@/components/Drawer";

const Notice = () => {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white p-4 rounded-lg border">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold mb-4">Notice Board</h2>
          <DialogDemo />
          <DrawerDemo />
        </div>
        <TableDemo />
      </div>
    </div>
  );
};

export default Notice;
