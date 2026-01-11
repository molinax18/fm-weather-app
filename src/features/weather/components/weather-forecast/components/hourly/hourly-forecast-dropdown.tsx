import { DropdownIcon } from "@/shared/components/svg";
import Dropdown from "@/shared/components/dropdown/components/dropdown";
import Button from "@/shared/components/button/button";
import dayjs from "dayjs";
import style from "./hourly-forecast.module.css";
import { useState } from "react";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <Dropdown isOpenByParent={isDropdownOpen} onToggle={toggleDropdown}>
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
        <ul>
          {days.map((day) => {
            return (
              <li key={day}>
                <Button
                  onClick={() => {
                    onClick(day);
                    toggleDropdown();
                  }}
                  className={style["hourly-forecast-dropdown-item-button"]}
                >
                  {day}
                </Button>
              </li>
            );
          })}
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
}
