import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ErrorIcon } from "@/shared/components/svg";
import style from "./fetching-states.module.css";

interface Props extends ComponentPropsWithoutRef<"div"> {
  message: string;
  children?: ReactNode;
}

export default function ErrorMessage({
  className,
  message,
  children,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`flex-col gap-md ${className ?? ""} ${style["error-container"]}`}
    >
      <ErrorIcon />
      <h2 className="title text-preset-lg">Something went wrong</h2>
      <p>{message}</p>
      {children}
    </div>
  );
}
