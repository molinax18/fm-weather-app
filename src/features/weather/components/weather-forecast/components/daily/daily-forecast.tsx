import type { DailyForecast } from "@/context/global/weather.type";
import DailyForecastCard from "./daily-forecast-card";
import style from "./daily-forecast.module.css";

interface Props {
  daily: DailyForecast;
}

export default function DailyForecast({ daily }: Props) {
  return (
    <section className={`flex-col gap-md ${style["daily-forecast"]}`}>
      <h3 className="title">Daily forecast</h3>
      <div className={`gap-md ${style["daily-forecast-content"]}`}>
        {daily.date.map((_, index) => (
          <DailyForecastCard
            key={daily.date[index].toString()}
            dailyInfo={{
              date: daily.date[index],
              temperature_max: daily.temperature_max[index],
              temperature_min: daily.temperature_min[index],
              weather_code: daily.weather_code[index],
            }}
          />
        ))}
      </div>
    </section>
  );
}
