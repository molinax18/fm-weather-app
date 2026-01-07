import type { CountryDay } from "@/context/global/country-type";
import DailyForecastCard from "./daily-forecast-card";
import style from "./daily-forecast.module.css";

interface Props {
  data: CountryDay[];
}

export default function DailyForecast({ data }: Props) {
  return (
    <div className={style["daily-forecast"]}>
      {data.map((day, index) => (
        <DailyForecastCard key={index} data={day} index={index} />
      ))}
    </div>
  );
}
