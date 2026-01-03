import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useDropdownContext } from "@/shared/ui/dropdown/dropdown.context";
import Button from "@/shared/ui/button/button";

interface Props extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

export default function Trigger({ ...props }: Props) {
  const { isOpen, toggleDropdown } = useDropdownContext();

  return (
    <Button
      {...props}
      aria-haspopup="true"
      aria-expanded={isOpen}
      onClick={toggleDropdown}
    >
      {props.children}
    </Button>
  );
}
