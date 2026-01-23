import type { WeatherForecastParams } from "./weather-forecast.type";

export const forecastParams: Omit<
  WeatherForecastParams,
  "latitude" | "longitude"
> = {
  current: [
    "apparent_temperature",
    "precipitation",
    "relative_humidity_2m",
    "temperature_2m",
    "weather_code",
    "wind_speed_10m",
  ],
  hourly: ["temperature_2m", "weather_code"],
  daily: ["temperature_2m_max", "temperature_2m_min", "weather_code"],
  timezone: "auto",
};
