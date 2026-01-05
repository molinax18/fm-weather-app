import type { CountryLocation } from "@/context/global/country-type";
import CurrentWeatherCard from "./current-weather-card";

interface Props {
  location: CountryLocation;
}

export default function CurrentWeather({ location }: Props) {
  return (
    <section>
      <CurrentWeatherCard data={location} />
    </section>
  );
}
