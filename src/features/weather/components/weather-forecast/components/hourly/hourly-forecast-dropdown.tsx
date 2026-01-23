import { DropdownIcon } from "@/shared/components/svg";
import Dropdown from "@/shared/components/dropdown/components/dropdown";
import HourlyForecastDropdownContent from "./hourly-forecast-dropdown-content";
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
      <Dropdown.Trigger
        className={`gap-md ${style["hourly-forecast-dropdown-button"]}`}
        buttonTheme="semi"
      >
        {currentDay}
        <DropdownIcon />
      </Dropdown.Trigger>

      <Dropdown.Menu
        className={`flex-col gap-xs card p-card-xs ${style["hourly-forecast-dropdown-menu"]}`}
      >
        <HourlyForecastDropdownContent
          availableDays={availableDays}
          onClick={onClick}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
}
