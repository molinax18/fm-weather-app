import { WeatherLogo } from "@/shared/ui/svg";
import UnitDropdown from "@/features/settings/components/unit-dropdown";
import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <WeatherLogo />
      <UnitDropdown />
    </header>
  );
}
