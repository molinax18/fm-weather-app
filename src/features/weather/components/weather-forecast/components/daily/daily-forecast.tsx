import type { CountryDay } from "@/context/global/country-type";
import DailyForecastCard from "./daily-forecast-card";
import style from "./daily-forecast.module.css";

interface Props {
  data: CountryDay[];
}

export default function DailyForecast({ data }: Props) {
  return (
    <section className="flex-col gap-md">
      <h3 className="title">Daily forecast</h3>
      <div className={`gap-md ${style["daily-forecast"]}`}>
        {data.map((day) => (
          <DailyForecastCard key={day.date} data={day} />
        ))}
      </div>
    </section>
  );
}
