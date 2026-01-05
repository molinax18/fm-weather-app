import { useRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { useDropdown } from "@/shared/components/dropdown/dropdown.hook";
import { DropdownContext } from "@/shared/components/dropdown/dropdown.context";
import Trigger from "./dropdown-trigger";
import Menu from "./dropdown-menu";
import style from "./dropdown.module.css";

interface Props extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export default function Dropdown({ ...props }: Props) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isOpen, toggleDropdown } = useDropdown(dropdownRef);

  return (
    <DropdownContext.Provider value={{ isOpen, toggleDropdown }}>
      <div {...props} ref={dropdownRef} className={style.dropdown}>
        {props.children}
      </div>
    </DropdownContext.Provider>
  );
}

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
