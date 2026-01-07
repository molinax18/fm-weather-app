import type { CountryHour } from "@/context/global/country-type";
import { useGlobalContext } from "@/context/global/global.context";
import { formatTemperature } from "@/features/weather/weather-utils";
import dayjs from "dayjs";
import style from "./hourly-forecast.module.css";

interface Props {
  data: CountryHour;
}

export default function HourlyForecastCard({ data }: Props) {
  const { countryConfig } = useGlobalContext();
  const { condition, temperature, time } = data;

  return (
    <article className={`card-semi p-card-sm ${style["hourly-forecast-card"]}`}>
      <div className={`gap-xs ${style["hourly-forecast-card-time"]}`}>
        <img
          src={condition.icon}
          alt={condition.text}
          className={style["hourly-forecast-card-image"]}
        />
        <span className="title">{dayjs(time).format("H")} PM</span>
      </div>
      <span className="subtitle">
        {formatTemperature(temperature, countryConfig.temperature)}
      </span>
    </article>
  );
}
