"use client";

import { Bell, MessageCircleMore } from "lucide-react";
import React from "react";
import UserItem from "../Header/UserItem";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { PopoverDemo } from "./BurgerMenu";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between p-2 px-4 border rounded-md w-full">
      <div className="capitalize font-bold text-lg">
        {pathname.split("/").pop()}
      </div>
      <div className="w-1/3 ">
        <Input type="search" placeholder="Search..." />
      </div>
      <div className="flex items-center justify-between gap-10 ">
        <div className="hidden items-center gap-2 md:flex">
          <div className=" bg-[#f5f5f5] rounded-full flex items-center justify-center p-2 cursor-pointer">
            <MessageCircleMore className="h-5 w-5 text-black/80" />
          </div>
          <div className=" bg-[#f5f5f5] rounded-full flex items-center justify-center p-2 cursor-pointer">
            <Bell className="h-5 w-5  text-black/80" />
          </div>
        </div>
        <div className="xl:flex hidden">
          <UserItem />
        </div>
        <div className="xl:hidden block ">
          <PopoverDemo />
        </div>
      </div>
    </div>
  );
};

export default Header;
