import { createContext, useContext } from "react";

interface DropdownContextProps {
  isOpen: boolean;
  toggleDropdown: () => void;
}

export const DropdownContext = createContext<DropdownContextProps | null>(null);

export function useDropdownContext() {
  const context = useContext(DropdownContext) as DropdownContextProps;

  if (!context)
    throw new Error("Dropdown components must be used within <Dropdown />");

  return context;
}
