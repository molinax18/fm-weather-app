import type {
  WeatherForecastParams,
  WeatherForecastResponse,
} from "./weather-forecast.type";

const baseUrl = "https://api.open-meteo.com/v1/forecast?";

export async function getWeatherForecast(
  params: WeatherForecastParams,
): Promise<WeatherForecastResponse | undefined> {
  const queryString = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)]),
  ).toString();
  const response = await fetch(`${baseUrl}${queryString}`);
  if (!response.ok) {
    throw new Error("Something was wrong :]");
  }

  const data = await response.json();
  if ("error" in data) return undefined;

  return data;
}
