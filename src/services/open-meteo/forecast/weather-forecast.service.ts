import type { WeatherForecast } from "@/context/global/weather.type";
import { weatherForecastAdapter } from "./weather-forecast.adapter";
import type { WeatherForecastParams } from "./weather-forecast.type";

const baseUrl = "https://api.open-meteo.com/v1/forecast?";

export async function getWeatherForecast(
  params: WeatherForecastParams,
): Promise<WeatherForecast | null> {
  const queryString = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)]),
  ).toString();

  const response = await fetch(`${baseUrl}${queryString}`);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data = await response.json();
  if ("error" in data) return null;

  return weatherForecastAdapter(data);
}
