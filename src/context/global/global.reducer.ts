import type { GlobalState, GlobalActionType } from "./global.type";

export function globalContextReducer(
  state: GlobalState,
  action: GlobalActionType,
): GlobalState {
  switch (action.type) {
    case "TOGGLE_MEASUREMENT_SYSTEM":
      if (state.countryConfig.measurementSystem === "imperial") {
        return {
          ...state,
          countryConfig: {
            measurementSystem: "metric",
            temperature: "celsius",
            windSpeed: "kph",
            precipitation: "mm",
          },
        };
      }

      return {
        ...state,
        countryConfig: {
          measurementSystem: "imperial",
          temperature: "fahrenheit",
          windSpeed: "mph",
          precipitation: "in",
        },
      };

    case "HANDLE_MEASUREMENTS_CONFIG":
      return {
        ...state,
        countryConfig: {
          ...state.countryConfig,
          ...action.payload,
        },
      };

    case "SET_LOCATION":
      const data = action.payload;

      return {
        ...state,
        countryInfo: data,
      };

    default:
      return state;
  }
}
