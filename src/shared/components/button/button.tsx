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
  type,
  ...props
}: Props) {
  return (
    <button
      {...props}
      type={type ?? "button"}
      data-theme={buttonTheme ?? "dark"}
      className={`button ${className ?? ""}`}
    >
      {children}
    </button>
  );
}
