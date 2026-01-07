import type { CountryConfig } from "./country-type";
import type { GlobalActionType } from "./global.type";

export const INITIAL_STATE: CountryConfig = {
  measurementSystem: "imperial",
  temperature: "fahrenheit",
  windSpeed: "mph",
  precipitation: "in",
};

export const globalContextReducer = (
  state: CountryConfig,
  action: GlobalActionType,
): CountryConfig => {
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
            windSpeed: "kph",
            precipitation: "mm",
          }
        : {
            measurementSystem: "imperial",
            temperature: "fahrenheit",
            windSpeed: "mph",
            precipitation: "in",
          };

    case "RESET_CONFIG":
      return INITIAL_STATE;

    default:
      return state;
  }
};
