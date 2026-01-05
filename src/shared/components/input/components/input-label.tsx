import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useInputContext } from "../input.context";

interface Props extends ComponentPropsWithoutRef<"label"> {
  children: ReactNode;
}

export default function ({ children, ...props }: Props) {
  const { id } = useInputContext();
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
}
