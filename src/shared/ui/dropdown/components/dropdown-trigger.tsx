import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useDropdownContext } from "@/shared/ui/dropdown/dropdown.context";

interface Props extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

export default function Trigger({ ...props }: Props) {
  const { isOpen, toggleDropdown } = useDropdownContext();

  return (
    <button
      {...props}
      aria-haspopup="true"
      aria-expanded={isOpen}
      onClick={toggleDropdown}
    >
      {props.children}
    </button>
  );
}
