import type { ReactNode, ComponentPropsWithoutRef } from "react";
import { InputContext } from "@/shared/components/input/input.context";

interface Props extends ComponentPropsWithoutRef<"div"> {
  id: string;
  name: string;
  children: ReactNode;
}

export default function InputRoot({ id, name, children, ...props }: Props) {
  return (
    <InputContext.Provider value={{ id, name }}>
      <div {...props}>{children}</div>
    </InputContext.Provider>
  );
}
