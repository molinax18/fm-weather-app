import type { WeatherApiParams, WeatherSearchResponse } from "./weather.type";
import { BASE_URL } from "./weather.constant";

export async function getCountryById(params: WeatherApiParams) {
  const queryString = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)]),
  ).toString();
  const response = await fetch(`${BASE_URL}/search.json?${queryString}`);

  if (!response.ok) {
    throw new Error(
      "We could'nt connect to the weather service. Please try again in a few moments",
    );
  }

  const data: WeatherSearchResponse[] = await response.json();
  return data;
}
