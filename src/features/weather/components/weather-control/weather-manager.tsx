import { useGlobalContext } from "@/context/global/open-meteo/global.context";
import CurrentWeather from "@/features/weather/components/current-weather/components/current-weather";
import DailyForecast from "../weather-forecast/components/daily/daily-forecast";
import HourlyForecast from "../weather-forecast/components/hourly/hourly-forecast";
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
        location={weatherInfo.current}
        info={weatherInfo.forecast.hourly[0]}
      />
      {/* 
        <DailyForecast data={weatherInfo.forecast.day} />
      <HourlyForecast data={weatherInfo.forecast} />
      */}
    </div>
  );
}
