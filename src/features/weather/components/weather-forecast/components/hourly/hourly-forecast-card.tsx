import type { HourlyInfo } from "./hourly-forecast.hook";
import { useGlobalContext } from "@/context/global/global.context";
import dayjs from "dayjs";
import style from "./hourly-forecast.module.css";
import { getWeatherIconByCode } from "@/shared/utils/open-meteo/weather-icon.util";

interface Props {
  hourlyInfo: HourlyInfo;
}

export default function HourlyForecastCard({ hourlyInfo }: Props) {
  const { weatherConfig } = useGlobalContext();
  const { temperature, date, weather_code } = hourlyInfo;
  const { src, alt } = getWeatherIconByCode(weather_code);
  const time =
    dayjs(date).hour() >= 0 && dayjs(date).hour() <= 11 ? "AM" : "PM";

  return (
    <article className={`card-semi p-card-sm ${style["hourly-forecast-card"]}`}>
      <div className={`gap-xs ${style["hourly-forecast-card-time"]}`}>
        <img
          src={`/images/${src}`}
          alt={alt}
          className={style["hourly-forecast-card-image"]}
        />
        <span className="title">
          {dayjs(date).format("H")} {time}
        </span>
      </div>
      <span className="subtitle">{`${temperature[weatherConfig.temperature]}°`}</span>
    </article>
  );
}
