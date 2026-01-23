import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useInputContext } from "@/shared/components/input/input.context";

interface Props extends ComponentPropsWithoutRef<"label"> {
  children: ReactNode;
}

export default function InputLabel({ children, ...props }: Props) {
  const { id } = useInputContext();
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
}
