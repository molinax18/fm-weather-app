import type { CountryLocation } from "@/context/global/country-type";
import type { Condition } from "@/shared/types/units";
import { useGlobalContext } from "@/context/global/global.context";
import { WEATHER_ICONS } from "@/features/weather/weather-icons.constant";
import { formatTemperature } from "../weather-utils";
import dayjs from "dayjs";
import style from "./current-weather.module.css";

interface Props {
  data: CountryLocation;
}

export default function CurrentWeatherCard({ data }: Props) {
  const {
    state: { countryConfig },
  } = useGlobalContext();
  const { city, condition, country, time, temperature } = data;

  return (
    <article className={`p-card-sm ${style["current-weather-card"]}`}>
      <div className={`flex-col ${style["current-weather-info"]}`}>
        <h2 className="title">
          {city}, {country}
        </h2>
        <span>{dayjs(time).format("dddd, MMM D, YYYY")}</span>
      </div>
      <div className={style["current-weather-temperature"]}>
        <img
          src={WEATHER_ICONS[condition as Condition]}
          alt={condition}
          className={style["current-weather-image"]}
        />
        <strong className="title text-preset-xl">
          {formatTemperature(temperature, countryConfig.temperature)}
        </strong>
      </div>
    </article>
  );
}
