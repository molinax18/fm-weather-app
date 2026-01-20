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
    hourly: [
      "temperature_2m",
      "apparent_temperature",
      "wind_speed_10m",
      "precipitation",
    ],
    timezone: "auto",
  });
  if (!weatherForecast) return undefined;

  return {
    current: userLocationAdapter(address),
    forecast: weatherForecastAdapter(weatherForecast),
  };
}
