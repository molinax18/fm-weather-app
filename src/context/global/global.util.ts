import type {
  WeatherForecast,
  WeatherInfo,
  WeatherLocation,
} from "./weather.type";
import { getWeatherForecast } from "@/services/open-meteo/forecast/weather-forecast.service";
import { getApproximateUserLocation } from "@/services/user-location/user-location.service";
import { forecastParams } from "@/services/open-meteo/forecast/weather-forecast.constant";
import { userLocationAdapter } from "@/services/user-location/user-location.adapter";

export async function getWeatherForecastWithLocation(): Promise<WeatherInfo | null> {
  const address = await getApproximateUserLocation();
  if (!address) return null;

  const weatherForecast = await getWeatherForecast({
    ...forecastParams,
    latitude: address.latitude,
    longitude: address.longitude,
  });
  if (!weatherForecast) return null;

  return {
    location: userLocationAdapter(address),
    forecast: weatherForecast,
  };
}

export async function getWeatherForecastWithCountryName(
  location: WeatherLocation,
  weatherForecastFn: Promise<WeatherForecast | null>,
): Promise<WeatherInfo | null> {
  const weatherForecast = await weatherForecastFn;
  if (!weatherForecast) return null;

  return {
    location,
    forecast: weatherForecast,
  };
}
