import React from "react";
import {
  AlignVerticalJustifyStart,
  ReceiptCent,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="border p-4 rounded-lg flex flex-col  gap-3">
        <div className=" flex items-center justify-between">
          <p className="font-semibold">Teachers</p>
          <div className=" bg-gray-100 rounded-full flex items-center justify-center p-3">
            <AlignVerticalJustifyStart className="h-5 w-5 text-purple-500" />
          </div>
        </div>
        <div className=" flex items-center justify-between">
          <p className="font-bold text-3xl">300</p>
          <div className="rounded-full flex items-center justify-center p-1 text-xs text-red-500 bg-red-100 gap-1">
            <TrendingDown className="w-4 h-4" />
            <p>-12.4%</p>
          </div>
        </div>
      </div>
      <div className="border p-4 rounded-lg flex flex-col  gap-3">
        <div className=" flex items-center justify-between">
          <p className="font-semibold">Students</p>
          <div className=" bg-blue-100 rounded-full flex items-center justify-center p-3">
            <Users className="h-5 w-5 text-blue-500" />
          </div>
        </div>
        <div className=" flex items-center justify-between">
          <p className="font-bold text-3xl">8,352</p>
          <div className="rounded-full flex items-center justify-center p-1 text-xs text-green-500 bg-green-100 gap-1">
            <TrendingUp className="w-4 h-4" />
            <p>16.4%</p>
          </div>
        </div>
      </div>
      <div className="border p-4 rounded-lg flex flex-col  gap-3">
        <div className=" flex items-center justify-between">
          <p className="font-semibold">Employees</p>
          <div className=" bg-orange-100 rounded-full flex items-center justify-center p-3">
            <Users className="h-5 w-5 text-orange-500" />
          </div>
        </div>
        <div className=" flex items-center justify-between">
          <p className="font-bold text-3xl">473</p>
          <div className="rounded-full flex items-center justify-center p-1 text-xs text-red-500 bg-red-100 gap-1">
            <TrendingDown className="w-4 h-4" />
            <p>-12.4%</p>
          </div>
        </div>
      </div>
      <div className="border p-4 rounded-lg flex flex-col  gap-3">
        <div className=" flex items-center justify-between">
          <p className="font-semibold">Earnings</p>
          <div className=" bg-green-100 rounded-full flex items-center justify-center p-3">
            <ReceiptCent className="h-5 w-5 text-green-500" />
          </div>
        </div>
        <div className=" flex items-center justify-between">
          <p className="font-bold text-3xl">₵37,382</p>
          <div className="rounded-full flex items-center justify-center p-1 text-xs text-green-500 bg-green-100 gap-1">
            <TrendingUp className="w-4 h-4" />
            <p>37.4%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
