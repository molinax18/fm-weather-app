import { useGlobalContext } from "@/context/global/global.context";
import CurrentWeather from "@/features/weather/components/current-weather/components/current-weather";
import WeatherForecast from "@/features/weather/components/weather-forecast/components/weather-forecast";

export default function WeatherManager() {
  const { countryInfo, isLoading, error } = useGlobalContext();

  if (isLoading) {
    return <p>Cargando clima...</p>;
  }

  if (error) {
    return <p>Ha ocurrido un error: {error.message}</p>;
  }

  if (countryInfo) {
    <div className="flex-col gap-lg">
      <CurrentWeather
        location={countryInfo.location}
        current={countryInfo.current}
      />
      <WeatherForecast forecast={countryInfo.forecast} />
    </div>;
  }
}
