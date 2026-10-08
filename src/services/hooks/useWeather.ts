import type { WeatherParams } from "../types/params.type";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { getWeather } from "../api.service";

const weatherOptions = (params: WeatherParams) =>
  queryOptions({
    queryKey: ["weather"],
    queryFn: () => getWeather(params),
    staleTime: 5 * 1000,
  });

export function useWeather(params: WeatherParams) {
  return useQuery(weatherOptions(params));
}
