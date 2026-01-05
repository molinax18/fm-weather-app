import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useDropdownContext } from "@/shared/components/dropdown/dropdown.context";
import style from "./dropdown.module.css";

interface Props extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export default function Menu({ ...props }: Props) {
  const { isOpen } = useDropdownContext();
  if (!isOpen) return null;

  return (
    <div
      {...props}
      role="menu"
      className={`${props.className ?? ""} ${style["dropdown-menu"]}`}
    >
      {props.children}
    </div>
  );
}
