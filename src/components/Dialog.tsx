"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { NoticeForm } from "./forms/NoticeForm";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle>Create A Notice</DialogTitle>
        </DialogHeader>
        <NoticeForm />
      </DialogContent>
    </Dialog>
  );
}
