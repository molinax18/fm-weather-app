import { DropdownIcon, UnitIcon, WeatherLogo } from "@/shared/ui/svg";
import Dropdown from "@/shared/ui/dropdown/components/dropdown";
import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <WeatherLogo />
      <Dropdown>
        <Dropdown.Trigger
          className={`button-dark tr-200-ease-out ${style["header-dropdown-button"]}`}
        >
          <UnitIcon />
          Units
          <DropdownIcon />
        </Dropdown.Trigger>
        <Dropdown.Menu className="card p-card-sm">
          This is a menu!
        </Dropdown.Menu>
      </Dropdown>
    </header>
  );
}
