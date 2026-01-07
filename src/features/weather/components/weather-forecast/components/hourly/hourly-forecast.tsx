import type { CountryForecast } from "@/context/global/country-type";
import HourlyForecastDropdown from "./hourly-forecast-dropdown";
import HourlyForecastCard from "./hourly-forecast-card";
import useHourlyForecast from "@/features/weather/components/weather-forecast/components/hourly/hourly-forecast.hook";
import style from "./hourly-forecast.module.css";

interface Props {
  data: CountryForecast;
}

export default function HourlyForecast({ data }: Props) {
  const { currentDate, availableDays, handleCurrentDay, hoursByDate } =
    useHourlyForecast(data);

  return (
    <section className="flex-col gap-md card p-card-sm">
      <header className={`gap-md ${style["hourly-forecast-header"]}`}>
        <h3 className="title">Hourly forecast</h3>
        <HourlyForecastDropdown
          days={availableDays
            .filter((day) => day.date !== currentDate)
            .map((day) => day.name)}
          onClick={(name) => {
            const targetDay = availableDays.find(
              (day) => day.name === String(name),
            );
            if (targetDay) handleCurrentDay(targetDay.index);
          }}
          currentDate={currentDate}
        />
      </header>
      <div className="flex-col gap-xs">
        {hoursByDate.map((hour) => (
          <HourlyForecastCard key={hour.time} data={hour} />
        ))}
      </div>
    </section>
  );
}
