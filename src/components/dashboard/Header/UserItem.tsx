import React from "react";

const UserItem = () => {
  return (
    <div className="flex items-center justify-between gap-2 overflow-hidden">
      <div className="">
        <p className="font-semibold text-sm">Mustapha Shafihu</p>
        <p className="text-xs text-neutral-500 text-wrap">Admin</p>
      </div>
      <div className="avatar flex justify-center items-center rounded-full bg-red-500 min-w-10 min-h-10">
        <p className="font-semibold text-white">MS</p>
      </div>
    </div>
  );
};

export default UserItem;
