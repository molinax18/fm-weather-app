import { DropdownIcon, UnitIcon } from "@/shared/components/svg";
import Dropdown from "@/shared/components/dropdown/components/dropdown";
import DropdownTrigger from "@/shared/components/dropdown/components/dropdown-trigger";
import DropdownMenu from "@/shared/components/dropdown/components/dropdown-menu";
import UnitContent from "./unit-content";
import style from "./unit.module.css";

export default function UnitDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger className={style["unit-dropdown-button"]}>
        <UnitIcon />
        Units
        <DropdownIcon />
      </DropdownTrigger>
      <DropdownMenu className={style["unit-dropdown-menu"]}>
        <UnitContent />
      </DropdownMenu>
    </Dropdown>
  );
}
