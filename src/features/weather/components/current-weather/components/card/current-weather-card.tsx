import type { CountryLocation } from "@/context/global/country.type";
import { useGlobalContext } from "@/context/global/global.context";
import { formatTemperature } from "@/features/weather/weather.util";
import dayjs from "dayjs";
import style from "./current-weather-card.module.css";

interface Props {
  data: CountryLocation;
}

export default function CurrentWeatherCard({ data }: Props) {
  const { countryConfig } = useGlobalContext();
  const { city, condition, country, time, temperature } = data;

  return (
    <article className={`flex-col p-card-sm ${style["current-weather-card"]}`}>
      <div className={`flex-col gap-xs ${style["current-weather-country"]}`}>
        <h2 className="title text-preset-lg">
          {city}, {country}
        </h2>
        <span>{dayjs(time).format("dddd, MMM D, YYYY")}</span>
      </div>
      <div className={`${style["current-weather-temperature"]} gap-lg`}>
        <img
          src={condition.icon}
          alt={condition.text}
          className={style["current-weather-image"]}
        />
        <strong className="title text-preset-2xl">
          {formatTemperature(temperature, countryConfig.temperature)}
        </strong>
      </div>
    </article>
  );
}
