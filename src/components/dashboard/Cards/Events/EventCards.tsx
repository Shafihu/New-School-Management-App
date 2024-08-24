import { Calendar } from "@/components/ui/calendar";
import React from "react";

export function EventCard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="border p-2 rounded-lg flex items-start gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-[3px] mt-1"></div>
          <div className="flex flex-col justify-between flex-1 gap-1">
            <div className="flex justify-between items-start">
              <div className="font-semibold text-sm  overflow-hidden text-ellipsis whitespace-nowrap">
                Foundation Day
              </div>
              <div className="text-xs text-gray-500">20-02-2024</div>
            </div>
            <p className="text-sm text-gray-400  overflow-hidden text-ellipsis whitespace-nowrap">
              This is the description of the event
            </p>
          </div>
        </div>

        <div className="border p-2 rounded-lg flex items-start gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-[3px] mt-1"></div>
          <div className="flex flex-col justify-between flex-1 gap-1">
            <div className="flex justify-between items-start">
              <div className="font-semibold text-sm  overflow-hidden text-ellipsis whitespace-nowrap">
                Foundation Day
              </div>
              <div className="text-xs text-gray-500">20-02-2024</div>
            </div>
            <p className="text-sm text-gray-400  overflow-hidden text-ellipsis whitespace-nowrap">
              This is the description of the event
            </p>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="rounded-lg flex items-start justify-center border h-fit">
        <Calendar className="" />
      </div>
    </div>
  );
}
