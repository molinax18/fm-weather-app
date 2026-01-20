import { adaptHourly } from "@/utils/open-meteo/adapt-by-index";
import type { WeatherForecastResponse } from "./weather-forecast.type";
import type { WeatherForecast } from "@/context/global/open-meteo/weather.type";

export function weatherForecastAdapter(
  weatherInfo: WeatherForecastResponse,
): WeatherForecast {
  return {
    hourly: adaptHourly(weatherInfo.hourly),
  };
}
