import { DropdownIcon } from "@/shared/components/svg";
import Dropdown from "@/shared/components/dropdown/components/dropdown";
import HourlyForecastDropdownContent from "./hourly-forecast-dropdown-content";
import dayjs from "dayjs";
import style from "./hourly-forecast.module.css";

interface Props {
  currentDate: string;
  days: Array<string>;
  onClick: (name: string) => void;
}

export default function HourlyForecastDropdown({
  days,
  currentDate,
  onClick,
}: Props) {
  return (
    <Dropdown>
      <Dropdown.Trigger
        className={`gap-md ${style["hourly-forecast-dropdown-button"]}`}
        buttonTheme="semi"
      >
        {dayjs(currentDate).format("dddd")}
        <DropdownIcon />
      </Dropdown.Trigger>

      <Dropdown.Menu
        className={`flex-col gap-xs card p-card-xs ${style["hourly-forecast-dropdown-menu"]}`}
      >
        <HourlyForecastDropdownContent days={days} onClick={onClick} />
      </Dropdown.Menu>
    </Dropdown>
  );
}
