import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useDropdownContext } from "@/shared/components/dropdown/dropdown.context";
import Button from "@/shared/components/button/button";

interface Props extends ComponentPropsWithoutRef<typeof Button> {
  children: ReactNode;
}

export default function DropdownTrigger({ ...props }: Props) {
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
