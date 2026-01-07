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

const localStorage = window.localStorage;
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
  const [state, dispatch] = useReducer(
    globalContextReducer,
    INITIAL_STATE,
    (initial) => {
      try {
        const saved = localStorage.getItem("weatherData");
        if (!saved) return initial;

        const { weatherInfo: savedState, timestamp } = JSON.parse(saved);
        const halfHour = 60 * 60 * 1000;
        const isExpired = Date.now() - timestamp > halfHour;

        return isExpired ? initial : savedState;
      } catch {
        return initial;
      }
    },
  );

  useEffect(() => {
    async function getWeatherForecast() {
      try {
        const location = await getApproximateUserLocation();
        const data = await getWeatherForecastData({
          ...DEFAULT_PARAMS,
          q: location
            ? `${location.country} ${location.city}`
            : DEFAULT_PARAMS.q,
        });
        dispatch({ type: "SET_LOCATION", payload: data });
      } catch (error) {
        console.log(error);
      }
    }

    if (!state.countryInfo) {
      getWeatherForecast();
    }
  }, []);

  useEffect(() => {
    const data = {
      weatherInfo: state,
      timestamp: Date.now(),
    };
    localStorage.setItem("weatherData", JSON.stringify(data));
  }, [state]);

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
