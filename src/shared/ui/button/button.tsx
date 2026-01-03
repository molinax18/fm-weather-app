import type { ComponentPropsWithoutRef, ReactNode } from "react";

interface Props extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

export default function Button({ ...props }: Props) {
  return (
    <button
      {...props}
      className={`button-dark tr-200-ease-out ${props.className ?? ""}`}
    >
      {props.children}
    </button>
  );
}
