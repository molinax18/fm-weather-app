import { WeatherLogo } from "@/shared/components/svg";
import UnitDropdown from "@/features/unit-settings/components/unit-dropdown";
import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <WeatherLogo />
      <UnitDropdown />
    </header>
  );
}
