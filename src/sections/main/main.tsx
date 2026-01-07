import type { ComponentPropsWithoutRef, ReactNode } from "react";
import style from "./main.module.css";

interface Props extends ComponentPropsWithoutRef<"main"> {
  children: ReactNode;
}

export default function Main({ children, className, ...props }: Props) {
  return (
    <main
      {...props}
      className={`flex-col gap-lg ${style.main} ${className ?? ""}`}
    >
      {children}
    </main>
  );
}
