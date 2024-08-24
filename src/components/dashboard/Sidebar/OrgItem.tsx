import React from "react";

const OrgItem = () => {
  return (
    <div className="flex items-center  gap-2 overflow-hidden">
      <div className="avatar flex justify-center items-center rounded-full bg-red-500 min-w-10 min-h-10">
        <p className="font-semibold text-white">E</p>
      </div>
      <div className="">
        <p className="font-semibold text-[16px]">EduHub</p>
      </div>
    </div>
  );
};

export default OrgItem;
