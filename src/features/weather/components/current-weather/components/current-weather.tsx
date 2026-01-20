import CurrentWeatherCard from "./card/current-weather-card";
import CurrentWeatherUnits from "./unit/current-weather-units";
import style from "./current-weather.module.css";
import type {
  HourlyForecast,
  WeatherCurrent,
} from "@/context/global/open-meteo/weather.type";

interface Props {
  location: WeatherCurrent;
  info: HourlyForecast;
}

export default function CurrentWeather({ location, info }: Props) {
  return (
    <section className={`flex-col gap-lg ${style["current-weather"]}`}>
      <CurrentWeatherCard location={location} info={info} />
      <CurrentWeatherUnits info={info} />
    </section>
  );
}
