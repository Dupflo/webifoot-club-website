"use client";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface ContextProps {
  layout: string;
  setLayout: Dispatch<SetStateAction<string>>;
}

const LayoutContext = createContext<ContextProps>({ layout: "", setLayout: (): string => "" });

export const LayoutContextProvider = ({ children }: any) => {
  const [layout, setLayout] = useState("");
  return <LayoutContext.Provider value={{ layout, setLayout }}>{children}</LayoutContext.Provider>;
};

export const useLayoutContext = () => useContext(LayoutContext);


