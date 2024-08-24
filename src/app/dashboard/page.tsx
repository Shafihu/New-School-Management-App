import Earnings from "@/components/dashboard/Cards/Earnings/Earnings";
import Events from "@/components/dashboard/Cards/Events/Events";
import Notice from "@/components/dashboard/Cards/Notice/Notice";
import Overview from "@/components/dashboard/Cards/Overview";
import Students from "@/components/dashboard/Cards/Students/Students";
import React from "react";

const Dashboard = () => {
  return (
    <div className="space-y-6 max-w-[1200px] mx-auto">
      <Overview />
      {/* Earnings and Students Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-w-full ">
        <Earnings />
        <Students />
      </div>
      {/* Notice Board and Events Calendar Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Notice />
        <Events />
      </div>
    </div>
  );
};

export default Dashboard;
