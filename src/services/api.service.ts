import type { WeatherErrorResponse, WeatherResponse } from "./types/api.type";
import type { WeatherParams } from "./types/params.type";
import { parseWeatherURL } from "./utils/parseWeatherURL.util";
import axios from "axios";

export const BASE_URL = "https://api.open-meteo.com/v1/forecast?";

export async function getWeather(
  params: WeatherParams,
): Promise<WeatherResponse | WeatherErrorResponse | undefined> {
  try {
    const parsedURL = parseWeatherURL(params);
    const { data } = await axios.get<WeatherResponse>(parsedURL);
    return data;
  } catch (error) {
    if (axios.isAxiosError<WeatherErrorResponse>(error)) {
      if (error.response && error.response.status === 400) {
        return error.response.data;
      } else {
        throw error;
      }
    }

    throw error;
  }
}
