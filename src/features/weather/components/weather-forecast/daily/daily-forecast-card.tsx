import type { CountryDay } from "@/context/global/country-type";
import {
  formatTemperature,
  getDayByIndex,
} from "@/features/weather/weather-utils";
import { useGlobalContext } from "@/context/global/global.context";
import style from "./daily-forecast.module.css";

interface Props {
  data: CountryDay;
  index: number;
}

export default function DailyForecastCard({ data, index }: Props) {
  const {
    state: { countryConfig },
  } = useGlobalContext();
  const { condition, temperature } = data;

  return (
    <article
      className={`card p-card-sm flex-col ${style["daily-forecast-card"]}`}
    >
      <h4>{getDayByIndex(data.date, index).format("ddd")}</h4>
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
