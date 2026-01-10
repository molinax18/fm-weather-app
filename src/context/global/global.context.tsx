import { createContext, useContext, useEffect, useReducer } from "react";
import { globalContextReducer } from "./global-config.reducer";
import type { GlobalContextProps, GlobalProviderProps } from "./global.type";
import type { CountryConfig } from "./country.type";
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "./global.util";

const INITIAL_CONFIG_STATE: CountryConfig = {
  measurementSystem: "imperial",
  temperature: "fahrenheit",
  windSpeed: "mph",
  precipitation: "in",
} as const;

const GlobalContext = createContext<GlobalContextProps | null>(null);

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [countryConfig, dispatch] = useReducer(
    globalContextReducer,
    INITIAL_CONFIG_STATE,
    (prev) => {
      const userConfig = localStorage.getItem("user-config");
      return userConfig ? JSON.parse(userConfig) : prev;
    },
  );

  const weatherQuery = useQuery({
    queryKey: ["weatherForecast"],
    queryFn: fetchWeatherData,
    staleTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    throwOnError: false,
  });

  const contextValue: GlobalContextProps = {
    countryConfig: countryConfig,
    dispatch,
    countryInfo: weatherQuery.data || null,
    isLoading: weatherQuery.isLoading,
    isError: weatherQuery.isError,
    error: weatherQuery.error,
    refetch: weatherQuery.refetch,
  };

  useEffect(() => {
    localStorage.setItem("user-config", JSON.stringify(countryConfig));
  }, [countryConfig]);

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
