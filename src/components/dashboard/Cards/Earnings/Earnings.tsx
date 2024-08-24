"use client";

import React from "react";
import { SampleDatePicker } from "@/components/RealCalendar";
import { Chart } from "./Chart";

const Earnings = () => {
  return (
    <div className="lg:col-span-2">
      <div className="p-4 rounded-lg border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Earnings</h2>
          <SampleDatePicker />
        </div>
        <div className="rounded-lg flex items-center justify-center">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Earnings;
