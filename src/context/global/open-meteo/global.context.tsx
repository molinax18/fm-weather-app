import { createContext, useContext, useEffect, useReducer } from "react";
import { globalContextReducer } from "./global-config.reducer";
import type {
  GlobalContextProps,
  GlobalProviderProps,
  WeatherConfig,
} from "./global.type";
import { getWeatherForecastWithLocation } from "./global.util";
import { useWeatherForecast } from "@/hooks/weather-forecast.hook";

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

  const { data, isLoading, isError, error, refetch } = useWeatherForecast({
    fn: getWeatherForecastWithLocation,
    options: {
      staleTime: 1000 * 60 * 30,
      refetchOnWindowFocus: false,
      throwOnError: false,
    },
  });

  const contextValue: GlobalContextProps = {
    weatherConfig,
    dispatch,
    weatherInfo: data || null,
    isLoading: isLoading,
    isError: isError,
    error: error,
    refetch: refetch,
  };

  console.log(data);

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
