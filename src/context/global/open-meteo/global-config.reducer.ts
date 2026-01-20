import type { WeatherConfig } from "./global.type";
import type { GlobalActionType } from "./global.type";

export const INITIAL_STATE: WeatherConfig = {
  measurementSystem: "imperial",
  temperature: "fahrenheit",
  windSpeed: "mph",
  precipitation: "inch",
};

export const globalContextReducer = (
  state: WeatherConfig,
  action: GlobalActionType,
): WeatherConfig => {
  switch (action.type) {
    case "UPDATE_CONFIG":
      return {
        ...state,
        ...action.payload,
      };

    case "SET_MEASUREMENT_SYSTEM":
      return action.payload === "metric"
        ? {
            measurementSystem: "metric",
            temperature: "celsius",
            windSpeed: "kmh",
            precipitation: "mm",
          }
        : {
            measurementSystem: "imperial",
            temperature: "fahrenheit",
            windSpeed: "mph",
            precipitation: "inch",
          };

    case "RESET_CONFIG":
      return INITIAL_STATE;

    default:
      return state;
  }
};
