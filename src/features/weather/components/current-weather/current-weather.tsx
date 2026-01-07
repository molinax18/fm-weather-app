import type {
  CountryCurrent,
  CountryLocation,
} from "@/context/global/country-type";
import CurrentWeatherCard from "./card/current-weather-card";
import CurrentWeatherUnits from "./unit/current-weather-units";

interface Props {
  location: CountryLocation;
  current: CountryCurrent;
}

export default function CurrentWeather({ location, current }: Props) {
  return (
    <section className="flex-col gap-lg">
      <CurrentWeatherCard data={location} />
      <CurrentWeatherUnits current={current} />
    </section>
  );
}
