"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import { useDrawer } from "@/context/DrawerContext";

export function DropdownMenuDemo({ from }: { from: string }) {
  let dropdownContent;

  const { openDrawer } = useDrawer();

  const handleOpen = () => {
    openDrawer();
  };

  switch (from) {
    case "notice":
      dropdownContent = (
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer" onClick={handleOpen}>
            View
          </DropdownMenuItem>
          <Link href="">
            <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
          </Link>
          <DropdownMenuItem className="cursor-pointer">Delete</DropdownMenuItem>
        </DropdownMenuGroup>
      );
      break;
    case "students":
      dropdownContent = (
        <DropdownMenuGroup>
          <DropdownMenuItem>Students</DropdownMenuItem>
          <DropdownMenuItem>Teachers</DropdownMenuItem>
        </DropdownMenuGroup>
      );
      break;
    case "event":
      dropdownContent = (
        <DropdownMenuGroup>
          <DropdownMenuItem>View</DropdownMenuItem>
          <DropdownMenuItem>Delete all</DropdownMenuItem>
        </DropdownMenuGroup>
      );
      break;
    default:
      dropdownContent = (
        <DropdownMenuGroup>
          <DropdownMenuItem>Home</DropdownMenuItem>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuGroup>
      );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36">
        {dropdownContent}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
