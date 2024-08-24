"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface DialogData {
  title: string;
  description: string;
}

interface DialogContextType {
  isOpen: boolean;
  dialogData: DialogData | null;
  openDialog: (data: DialogData) => void;
  closeDialog: () => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

interface DialogProviderProps {
  children: ReactNode;
}

export function DialogProvider({ children }: DialogProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogData, setDialogData] = useState<DialogData | null>(null);

  const openDialog = (data: DialogData) => {
    setDialogData(data);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setDialogData(null);
  };

  return (
    <DialogContext.Provider
      value={{ isOpen, dialogData, openDialog, closeDialog }}
    >
      {children}
    </DialogContext.Provider>
  );
}

export function useDialog() {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }

  return context;
}
