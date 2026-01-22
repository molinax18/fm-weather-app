import { useGlobalContext } from "@/context/global/open-meteo/global.context";
import CurrentWeather from "@/features/weather/components/current-weather/components/current-weather";
import DailyForecast from "@/features/weather/components/weather-forecast/components/daily/daily-forecast";
import HourlyForecast from "@/features/weather/components/weather-forecast/components/hourly/hourly-forecast";
import Loader from "@/shared/components/states/loader";
import style from "./weather-manager.module.css";

export default function WeatherManager() {
  const { weatherInfo, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <Loader className={`title gap-md ${style["weather-manager-loading"]}`}>
        <span className="title">Loading weather</span>
      </Loader>
    );
  }

  if (!weatherInfo) return null;

  return (
    <div className={`flex-col gap-lg ${style["weather-forecast-container"]}`}>
      <CurrentWeather
        location={weatherInfo.location}
        current={weatherInfo.forecast.current}
      />
      <DailyForecast daily={weatherInfo.forecast.daily} />
      <HourlyForecast
        hourly={weatherInfo.forecast.hourly}
        daily={weatherInfo.forecast.daily}
      />
    </div>
  );
}
