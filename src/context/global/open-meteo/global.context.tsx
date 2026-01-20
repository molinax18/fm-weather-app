import { createContext, useContext, useEffect, useReducer } from "react";
import { globalContextReducer } from "./global-config.reducer";
import { useQuery } from "@tanstack/react-query";
import type {
  GlobalContextProps,
  GlobalProviderProps,
  WeatherConfig,
} from "./global.type";
import { weatherForecastWithLocation } from "@/services/weather/weather-forecast-with-location.service";

const INITIAL_CONFIG_STATE: WeatherConfig = {
  measurementSystem: "imperial",
  temperature: "fahrenheit",
  windSpeed: "mph",
  precipitation: "inch",
} as const;

const GlobalContext = createContext<GlobalContextProps | null>(null);

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [weatherConfig, dispatch] = useReducer(
    globalContextReducer,
    INITIAL_CONFIG_STATE,
    (prev) => {
      const userConfig = localStorage.getItem("user-config");
      return userConfig ? JSON.parse(userConfig) : prev;
    },
  );

  const weatherQuery = useQuery({
    queryKey: ["weatherForecast"],
    queryFn: weatherForecastWithLocation,
    staleTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    throwOnError: false,
  });

  const contextValue: GlobalContextProps = {
    weatherConfig,
    dispatch,
    weatherInfo: weatherQuery.data || null,
    isLoading: weatherQuery.isLoading,
    isError: weatherQuery.isError,
    error: weatherQuery.error,
    refetch: weatherQuery.refetch,
  };

  useEffect(() => {
    localStorage.setItem("user-config", JSON.stringify(weatherConfig));
  }, [weatherConfig]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (!context)
    throw new Error("Global components must be used within <GlobalProvider />");

  return context;
}
