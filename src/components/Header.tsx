import type { ComponentPropsWithoutRef } from "react";
import { cn } from "cn";

import Button from "./ui/Button";
import Dropdown from "../assets/images/icon-dropdown.svg?react";
import Units from "../assets/images/icon-units.svg?react";
import logo from "../assets/images/logo.svg";

export default function Header({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"header">) {
  return (
    <header
      className={cn("flex justify-between items-center pt-6", className)}
      {...props}
    >
      <img src={logo} alt="Weather Now logo" className="w-42 md:w-auto" />
      <Button className="flex items-center gap-x-2 cursor-pointer">
        <span>
          <Units aria-hidden="true" />
        </span>
        <span>Units</span>
        <span>
          <Dropdown aria-hidden="true" />
        </span>
      </Button>
    </header>
  );
}
