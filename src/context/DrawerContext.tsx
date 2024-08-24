"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface DrawerData {
  id: string;
  title: string;
  about: string;
  date: string;
  action: string;
  img: string;
}

interface DrawerContextType {
  isOpen: boolean;
  drawerData: DrawerData | null;
  setDrawerData: React.Dispatch<React.SetStateAction<DrawerData | null>>;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

interface DrawerProviderProps {
  children: ReactNode;
}

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerData, setDrawerData] = useState<DrawerData | null>(null);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <DrawerContext.Provider
      value={{ isOpen, drawerData, setDrawerData, openDrawer, closeDrawer }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }

  return context;
}
