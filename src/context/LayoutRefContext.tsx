"use client";

import React, { createContext, useContext, useRef, useState } from "react";

type LayoutRefContextType = {
  layoutRef: React.RefObject<HTMLDivElement | null>;
};

type NavContextType = {
  currentNavLabel: string;
  setCurrentNavLabel: (label: string) => void;
};

type MainProviderProps = {
  children: React.ReactNode;
};

// Contexts
const LayoutRefContext = createContext<LayoutRefContextType | undefined>(
  undefined
);
const NavContext = createContext<NavContextType | undefined>(undefined);

export function MainProvider({ children }: MainProviderProps) {
  const layoutRef = useRef<HTMLDivElement | null>(null);
  const [currentNavLabel, setCurrentNavLabel] = useState("");

  return (
    <LayoutRefContext.Provider value={{ layoutRef }}>
      <NavContext.Provider value={{ currentNavLabel, setCurrentNavLabel }}>
        {children}
      </NavContext.Provider>
    </LayoutRefContext.Provider>
  );
}

// Hooks
export function useLayoutRef() {
  const context = useContext(LayoutRefContext);
  if (!context)
    throw new Error("useLayoutRef must be used within MainProvider");
  return context;
}

export function useNavContext() {
  const context = useContext(NavContext);
  if (!context)
    throw new Error("useNavContext must be used within MainProvider");
  return context;
}
