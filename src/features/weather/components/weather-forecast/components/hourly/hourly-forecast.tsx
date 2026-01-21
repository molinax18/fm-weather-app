import type {
  DailyForecast,
  HourlyForecast,
} from "@/context/global/open-meteo/weather.type";
import HourlyForecastDropdown from "./hourly-forecast-dropdown";
import HourlyForecastCard from "./hourly-forecast-card";
import useHourlyForecast from "@/features/weather/components/weather-forecast/components/hourly/hourly-forecast.hook";
import dayjs from "dayjs";
import style from "./hourly-forecast.module.css";

interface Props {
  hourly: HourlyForecast;
  daily: DailyForecast;
}

export default function HourlyForecast({ hourly, daily }: Props) {
  const { availableDays, currentDate, handleCurrentDay, hourlyDataForDay } =
    useHourlyForecast(hourly, daily);

  return (
    <section
      className={`flex-col gap-md card p-card-sm ${style["hourly-forecast"]}`}
    >
      <header className={`gap-md ${style["hourly-forecast-header"]}`}>
        <h3 className="title">Hourly forecast</h3>
        <HourlyForecastDropdown
          availableDays={availableDays}
          onClick={handleCurrentDay}
          currentDay={dayjs(currentDate).format("dddd")}
        />
      </header>
      <div className={`flex-col gap-md ${style["hourly-forecast-content"]}`}>
        {hourlyDataForDay.map((hour) => (
          <HourlyForecastCard key={hour.date.toString()} hourlyInfo={hour} />
        ))}
      </div>
    </section>
  );
}
