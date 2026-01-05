import { mapToCountryWeather } from "./weather-forecast.adapter";
import { BASE_URL } from "./weather.constant";
import type { WeatherApiParams, WeatherResponse } from "./weather.type";

export async function getWeatherForecastData(params: WeatherApiParams) {
  try {
    const queryString = new URLSearchParams(
      Object.entries(params).map(([key, value]) => [key, String(value)]),
    ).toString();

    const response = await fetch(`${BASE_URL}/forecast.json?${queryString}`);
    if (!response.ok) throw new Error("Error en la petición");

    const data: WeatherResponse = await response.json();

    return mapToCountryWeather(data);
  } catch (error) {
    return null;
  }
}
