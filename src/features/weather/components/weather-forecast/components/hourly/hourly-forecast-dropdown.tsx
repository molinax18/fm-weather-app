import { DropdownIcon } from "@/shared/components/svg";
import HourlyForecastDropdownContent from "./hourly-forecast-dropdown-content";
import DropdownMenu from "@/shared/components/dropdown/components/dropdown-menu";
import DropdownTrigger from "@/shared/components/dropdown/components/dropdown-trigger";
import Dropdown from "@/shared/components/dropdown/components/dropdown";
import style from "./hourly-forecast.module.css";

interface Props {
  currentDay: string;
  availableDays: Array<string>;
  onClick: (name: string) => void;
}

export default function HourlyForecastDropdown({
  availableDays,
  currentDay,
  onClick,
}: Props) {
  return (
    <Dropdown>
      <DropdownTrigger
        className={`gap-md ${style["hourly-forecast-dropdown-button"]}`}
        buttonTheme="semi"
      >
        {currentDay}
        <DropdownIcon />
      </DropdownTrigger>

      <DropdownMenu
        className={`flex-col gap-xs card p-card-xs ${style["hourly-forecast-dropdown-menu"]}`}
      >
        <HourlyForecastDropdownContent
          availableDays={availableDays}
          onClick={onClick}
        />
      </DropdownMenu>
    </Dropdown>
  );
}
