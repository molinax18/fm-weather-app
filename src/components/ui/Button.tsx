import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "cn";

type BtnStyle = "dark" | "light" | "accent";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  btnStyle?: BtnStyle;
  children: ReactNode;
}

export default function Button({
  className = "",
  btnStyle = "dark",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn("btn", className)}
      data-theme={btnStyle}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
