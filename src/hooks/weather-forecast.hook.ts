import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";

const queryKey = "weatherForecast";

interface Props<T> {
  fn: () => Promise<T>;
  options?: Omit<
    UseQueryOptions<T, Error, T, unknown[]>,
    "queryKey" | "queryFn"
  >;
}

export function useWeatherForecast<T>({
  fn,
  options,
}: Props<T>): UseQueryResult<T> {
  return useQuery({
    queryKey: [queryKey],
    queryFn: fn,
    ...options,
  });
}
