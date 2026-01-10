import type { CountryDay } from "@/context/global/country.type";
import { formatTemperature } from "@/features/weather/weather.util";
import { useGlobalContext } from "@/context/global/global.context";
import style from "./daily-forecast.module.css";
import dayjs from "dayjs";

interface Props {
  data: CountryDay;
}

export default function DailyForecastCard({ data }: Props) {
  const { countryConfig } = useGlobalContext();
  const { condition, temperature, date } = data;

  return (
    <article
      className={`card p-card-sm flex-col gap-md ${style["daily-forecast-card"]}`}
    >
      <h4>{dayjs(date).format("ddd")}</h4>
      <img
        src={condition.icon}
        alt={condition.text}
        className={style["daily-forecast-image"]}
      />
      <div className={style["daily-forecast-temperature"]}>
        <strong className="title">
          {formatTemperature(temperature.max, countryConfig.temperature)}
        </strong>
        <span>
          {formatTemperature(temperature.min, countryConfig.temperature)}
        </span>
      </div>
    </article>
  );
}
