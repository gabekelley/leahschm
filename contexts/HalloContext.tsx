"use client";

import { createContext, useContext, useState } from "react";

type HalloContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const HalloContext = createContext<HalloContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function useHallo() {
  return useContext(HalloContext);
}

export function HalloProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HalloContext.Provider
      value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
    </HalloContext.Provider>
  );
}
