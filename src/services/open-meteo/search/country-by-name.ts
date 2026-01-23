import type { WeatherSearchResponse } from "@/services/open-meteo/weather.type";

const baseUrl = "https://geocoding-api.open-meteo.com/v1/search?";

export async function getCountryByName(
  name: string,
): Promise<WeatherSearchResponse> {
  const response = await fetch(`${baseUrl}name=${encodeURIComponent(name)}`);

  if (!response.ok) {
    throw new Error("Something was wrong :]");
  }

  return await response.json();
}
