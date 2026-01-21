import type { WeatherInfo } from "@/context/global/open-meteo/weather.type";
import { weatherForecastAdapter } from "./open-meteo/forecast/weather-forecast.adapter";
import { getWeatherForecast } from "./open-meteo/forecast/weather-forecast.service";
import { getApproximateUserLocation } from "../user-location-open-meteo/user-location.service";
import { userLocationAdapter } from "../user-location-open-meteo/user-location.adapter";

export async function weatherForecastWithLocation(): Promise<
  WeatherInfo | undefined
> {
  const address = await getApproximateUserLocation();
  if (!address) return undefined;

  const weatherForecast = await getWeatherForecast({
    latitude: address.latitude,
    longitude: address.longitude,
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
  });
  if (!weatherForecast) return undefined;

  return {
    location: userLocationAdapter(address),
    forecast: weatherForecastAdapter(weatherForecast),
  };
}
