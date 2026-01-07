import { useGlobalContext } from "@/context/global/global.context";
import CurrentWeather from "@/features/weather/components/current-weather/current-weather";
import WeatherForecast from "@/features/weather/components/weather-forecast/hourly/components/weather-forecast";

export default function WeatherManager() {
  const { state } = useGlobalContext();

  if (!state || !state.countryInfo) {
    return <p>Cargando clima...</p>;
  }

  return (
    <div className="flex-col gap-lg">
      <CurrentWeather
        location={state.countryInfo.location}
        current={state.countryInfo.current}
      />
      <WeatherForecast forecast={state.countryInfo.forecast} />
    </div>
  );
}
