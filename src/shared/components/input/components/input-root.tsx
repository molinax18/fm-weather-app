import type { ReactNode, ComponentPropsWithoutRef } from "react";
import { InputContext } from "@/shared/components/input/input.context";
import Label from "./input-label";
import Control from "./input-control";

interface Props extends ComponentPropsWithoutRef<"div"> {
  id: string;
  name: string;
  children: ReactNode;
}

export default function Input({ id, name, children, ...props }: Props) {
  return (
    <InputContext.Provider value={{ id, name }}>
      <div {...props}>{children}</div>
    </InputContext.Provider>
  );
}

Input.Control = Control;
Input.Label = Label;
