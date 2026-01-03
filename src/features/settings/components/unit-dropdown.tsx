import { DropdownIcon, UnitIcon } from "@/shared/ui/svg";
import Dropdown from "@/shared/ui/dropdown/components/dropdown";
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
