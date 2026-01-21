import CurrentWeatherCard from "./card/current-weather-card";
import CurrentWeatherUnits from "./unit/current-weather-units";
import style from "./current-weather.module.css";
import type {
  WeatherLocation,
  CurrentForecast,
} from "@/context/global/open-meteo/weather.type";

interface Props {
  location: WeatherLocation;
  current: CurrentForecast;
}

export default function CurrentWeather({ location, current }: Props) {
  return (
    <section className={`flex-col gap-lg ${style["current-weather"]}`}>
      <CurrentWeatherCard location={location} current={current} />
      <CurrentWeatherUnits current={current} />
    </section>
  );
}
