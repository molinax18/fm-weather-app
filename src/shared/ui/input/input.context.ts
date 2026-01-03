import { createContext, useContext } from "react";

interface InputContextProps {
  id: string;
  name: string;
}

export const InputContext = createContext<InputContextProps | null>(null);

export function useInputContext() {
  const context = useContext(InputContext) as InputContextProps;

  if (!context)
    throw new Error("Input components must be used within <InputRoot />");

  return context;
}
