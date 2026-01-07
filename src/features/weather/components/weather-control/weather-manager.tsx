import { useGlobalContext } from "@/context/global/global.context";
import CurrentWeather from "@/features/weather/components/current-weather/components/current-weather";
import WeatherForecast from "@/features/weather/components/weather-forecast/components/weather-forecast";
import Loader from "@/shared/components/states/loader";
import style from "./weather-manager.module.css";

export default function WeatherManager() {
  const { countryInfo, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <Loader className={`title gap-md ${style["weather-manager-loading"]}`}>
        <span className="title">Loading weather</span>
      </Loader>
    );
  }

  if (!countryInfo) return null;

  return (
    <div className="flex-col gap-lg">
      <CurrentWeather
        location={countryInfo.location}
        current={countryInfo.current}
      />
      <WeatherForecast forecast={countryInfo.forecast} />
    </div>
  );
}
