import type { ComponentPropsWithoutRef } from "react";
import { cn } from "cn";

import logo from "../assets/images/logo.svg";
import UnitDropdown from "./UnitDropdown";

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
      <UnitDropdown />
    </header>
  );
}
