"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useDrawer } from "@/context/DrawerContext";
import Image from "next/image";

export function DrawerDemo() {
  const { isOpen, drawerData, closeDrawer } = useDrawer();

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeDrawer();
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={handleOpenChange}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-2xl px-5">
          <div className="flex md:flex-row flex-col items-center pt-4">
            <DrawerHeader>
              <DrawerTitle>{drawerData?.title}</DrawerTitle>
              <DrawerDescription>{drawerData?.about}</DrawerDescription>
              <span className="text-sm">{drawerData?.date}</span>
              <span className="text-sm text-gray-400">
                By: Mr. Boampong Agyei
              </span>
            </DrawerHeader>

            <div className="sm:min-w-[250px] max-h-[250px] w-full bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
              {drawerData?.img ? (
                <Image
                  src={drawerData.img}
                  alt="Notice picture"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500">No image available</span>
              )}
            </div>
          </div>
          <DrawerFooter>
            <Button variant="outline" onClick={closeDrawer}>
              Close
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
