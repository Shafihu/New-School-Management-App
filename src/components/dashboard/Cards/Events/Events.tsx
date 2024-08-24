import React from "react";
import { EventCard } from "./EventCards";
import { DropdownMenuDemo } from "@/components/DropdownMenu";

const Events = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded-lg border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Events Calendar</h2>
          <DropdownMenuDemo from="event" />
        </div>
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
