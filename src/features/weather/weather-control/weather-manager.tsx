import { useGlobalContext } from "@/context/global/global.context";
import CurrentWeather from "@/features/weather/current-weather/current-weather";

export default function WeatherManager() {
  const { state } = useGlobalContext();

  if (!state || !state.countryInfo) {
    return <p>Cargando clima...</p>;
  }

  return (
    <CurrentWeather
      location={state.countryInfo.location}
      current={state.countryInfo.current}
    />
  );
}
