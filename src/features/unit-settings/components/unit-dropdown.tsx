import { DropdownIcon, UnitIcon } from "@/shared/components/svg";
import Dropdown from "@/shared/components/dropdown/components/dropdown";
import UnitContent from "./unit-content";
import style from "./unit.module.css";

export default function UnitDropdown() {
  return (
    <Dropdown>
      <Dropdown.Trigger className={style["unit-dropdown-button"]}>
        <UnitIcon />
        Units
        <DropdownIcon />
      </Dropdown.Trigger>
      <Dropdown.Menu className={style["unit-dropdown-menu"]}>
        <UnitContent />
      </Dropdown.Menu>
    </Dropdown>
  );
}
