"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface NavContextProps {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const NavContext = createContext<NavContextProps | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <NavContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const context = useContext(NavContext);
  if (!context) throw new Error("useNav must be used inside NavProvider");
  return context;
}
