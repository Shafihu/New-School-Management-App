import React from "react";
import { CommandDemo } from "./Command";
import OrgItem from "./OrgItem";

const SideBar = () => {
  return (
    <div className="flex flex-col h-full gap-4 sticky top-[40px]">
      <div>
        <OrgItem />
      </div>
      <div className="grow">
        <CommandDemo />
      </div>
      <div className="text-xs text-gray-400 text-center">
        Powered by CodeAlchemy
      </div>
    </div>
  );
};

export default SideBar;
