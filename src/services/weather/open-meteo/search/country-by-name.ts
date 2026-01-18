import type { WeatherSearchResponse } from "../weather.type";

const baseUrl = "https://geocoding-api.open-meteo.com/v1/";

export async function getCountryByName(
  name: string,
): Promise<WeatherSearchResponse> {
  const response = await fetch(
    `${baseUrl}search?name=${encodeURIComponent(name)}`,
  );
  if (!response.ok) {
    throw new Error("Ha ocurrido un error al hacer la petición");
  }
  return await response.json();
}
