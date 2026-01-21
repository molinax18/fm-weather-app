import type { WeatherForecastResponse } from "./weather-forecast.type";
import type { WeatherForecast } from "@/context/global/open-meteo/weather.type";
import {
  precipitationFromMm,
  temperatureFromCelsius,
  windSpeedFromKmh,
} from "@/utils/open-meteo/transform-units";

export function weatherForecastAdapter(
  weatherInfo: WeatherForecastResponse,
): WeatherForecast {
  const { current, daily, hourly } = weatherInfo;

  return {
    current: {
      date: new Date(current.time),
      apparent_temperature: temperatureFromCelsius(
        current.apparent_temperature,
      ),
      temperature: temperatureFromCelsius(current.temperature_2m),
      precipitation: precipitationFromMm(current.precipitation),
      relative_humidity: current.relative_humidity_2m,
      weather_code: current.weather_code,
      wind_speed: windSpeedFromKmh(current.wind_speed_10m),
    },
    daily: {
      date: daily.time.map((t) => new Date(t)),
      temperature_max: daily.temperature_2m_max.map((tm) =>
        temperatureFromCelsius(tm),
      ),
      temperature_min: daily.temperature_2m_min.map((tm) =>
        temperatureFromCelsius(tm),
      ),
      weather_code: [...daily.weather_code],
    },
    hourly: {
      date: hourly.time.map((t) => new Date(t)),
      temperature: hourly.temperature_2m.map((tm) =>
        temperatureFromCelsius(tm),
      ),
      weather_code: [...hourly.weather_code],
    },
  };
}
