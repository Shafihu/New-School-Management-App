import Header from "@/components/dashboard/Header/Header";
import SideBar from "@/components/dashboard/Sidebar/SideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/6 h-screen sticky top-0 border-r border-gray-300 p-4 hidden xl:block ">
        <SideBar />
      </div>

      <div className="w-6/6 xl:w-5/6 p-4 flex flex-col gap-6 items-center mx-auto">
        <div className="sticky top-0 z-10 bg-white w-full ">
          <Header />
        </div>
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
