import type {
  CountryCurrent,
  CountryLocation,
} from "@/context/global/country-type";
import CurrentWeatherCard from "./card/current-weather-card";
import CurrentWeatherUnits from "./unit/current-weather-units";
import style from "@/features/weather/components/weather.module.css";

interface Props {
  location: CountryLocation;
  current: CountryCurrent;
}

export default function CurrentWeather({ location, current }: Props) {
  return (
    <section className={`flex-col ${style["current-weather"]}`}>
      <CurrentWeatherCard data={location} />
      <CurrentWeatherUnits current={current} />
    </section>
  );
}
