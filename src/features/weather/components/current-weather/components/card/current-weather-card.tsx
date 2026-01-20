import type {
  HourlyForecast,
  WeatherCurrent,
} from "@/context/global/open-meteo/weather.type";
import { useGlobalContext } from "@/context/global/open-meteo/global.context";
import dayjs from "dayjs";
import style from "./current-weather-card.module.css";

interface Props {
  location: WeatherCurrent;
  info: HourlyForecast;
}

export default function CurrentWeatherCard({ location, info }: Props) {
  const { weatherConfig } = useGlobalContext();
  const { city, country } = location;
  const { time, apparentTemperature } = info;

  return (
    <article className={`flex-col p-card-sm ${style["current-weather-card"]}`}>
      <div className={`flex-col gap-xs ${style["current-weather-country"]}`}>
        <h2 className="title text-preset-lg">
          {city}, {country}
        </h2>
        <span>{dayjs(time).format("dddd, MMM D, YYYY")}</span>
      </div>
      <div className={`${style["current-weather-temperature"]} gap-lg`}>
        {/* <img
          src={condition.icon}
          alt={condition.text}
          className={style["current-weather-image"]}
        /> */}

        <strong className="title text-preset-2xl">
          {apparentTemperature[weatherConfig.temperature]}°
        </strong>
      </div>
    </article>
  );
}
