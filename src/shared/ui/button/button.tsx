import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { ButtonTheme } from "./button.type";

interface Props extends ComponentPropsWithoutRef<"button"> {
  buttonTheme?: ButtonTheme;
  children: ReactNode;
}

export default function Button({
  className,
  buttonTheme,
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      data-theme={buttonTheme || "dark"}
      className={`button ${className ?? ""}`}
    >
      {children}
    </button>
  );
}
