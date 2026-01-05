import { createContext, useContext, useEffect, useReducer } from "react";
import { globalContextReducer } from "./global.reducer";
import type {
  GlobalContextProps,
  GlobalProviderProps,
  GlobalState,
} from "./global.type";
import { DEFAULT_PARAMS } from "@/services/weather/weather.constant";
import { getWeatherForecastData } from "@/services/weather/weather-forecast.service";
import { getApproximateUserLocation } from "@/services/user-location.service";

const INITIAL_STATE: GlobalState = {
  countryConfig: {
    measurementSystem: "imperial",
    temperature: "fahrenheit",
    windSpeed: "mph",
    precipitation: "in",
  },
  countryInfo: null,
} as const;

const GlobalContext = createContext<GlobalContextProps | null>(null);

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [state, dispatch] = useReducer(globalContextReducer, INITIAL_STATE);

  useEffect(() => {
    async function getWeatherForecast() {
      const { city } = await getApproximateUserLocation();
      const data = await getWeatherForecastData({
        ...DEFAULT_PARAMS,
        q: city || DEFAULT_PARAMS.q,
      });

      dispatch({ type: "SET_LOCATION", payload: data });
    }

    getWeatherForecast();
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
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
