import type { WeatherApiParams } from "./weather.type";

export const BASE_URL = "http://api.weatherapi.com/v1";
export const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export const DEFAULT_PARAMS: WeatherApiParams = {
  key: API_KEY,
  q: "Buenos Aires",
  days: 3,
};
