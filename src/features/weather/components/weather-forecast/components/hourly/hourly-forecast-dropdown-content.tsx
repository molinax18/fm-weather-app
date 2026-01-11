import { useDropdownContext } from "@/shared/components/dropdown/dropdown.context";
import Button from "@/shared/components/button/button";
import style from "./hourly-forecast.module.css";

interface Props {
  days: Array<string>;
  onClick: (day: string) => void;
}

export default function HourlyForecastDropdownContent({
  days,
  onClick,
}: Props) {
  const { toggleDropdown } = useDropdownContext();

  return (
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
  );
}
