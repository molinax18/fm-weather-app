import type { CountryLocation } from "@/context/global/country-type";
import { useGlobalContext } from "@/context/global/global.context";
import { formatTemperature } from "@/features/weather/weather-utils";
import dayjs from "dayjs";
import style from "./current-weather-card.module.css";

interface Props {
  data: CountryLocation;
}

export default function CurrentWeatherCard({ data }: Props) {
  const { countryConfig } = useGlobalContext();
  const { city, condition, country, time, temperature } = data;

  return (
    <article className={`p-card-sm ${style["current-weather-card"]}`}>
      <div className="flex-col gap-xs">
        <h2 className="title">
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
        <strong className="title text-preset-xl">
          {formatTemperature(temperature, countryConfig.temperature)}
        </strong>
      </div>
    </article>
  );
}
