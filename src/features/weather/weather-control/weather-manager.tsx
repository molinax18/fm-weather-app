import { useGlobalContext } from "@/context/global/global.context";
import CurrentWeather from "@/features/weather/current-weather/current-weather";

export default function WeatherManager() {
  const {
    state: { countryInfo },
  } = useGlobalContext();

  if (countryInfo === null) {
    return <span>Loading...</span>;
  }

  return <CurrentWeather location={countryInfo.location} />;
}
