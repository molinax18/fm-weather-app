import type { ActionDispatch, ReactNode } from "react";
import type {
  Measurement,
  Precipitation,
  Temperature,
  WindSpeed,
} from "@/shared/types/open-meteo/units";
import type { WeatherInfo } from "./weather.type";

export interface WeatherConfig {
  measurementSystem: Measurement;
  temperature: Temperature;
  windSpeed: WindSpeed;
  precipitation: Precipitation;
}

export interface GlobalProviderProps {
  children: ReactNode;
}

export interface GlobalContextProps {
  weatherConfig: WeatherConfig;
  dispatch: ActionDispatch<[action: GlobalActionType]>;
  weatherInfo: WeatherInfo | null;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
}

export type GlobalActionType =
  | { type: "UPDATE_CONFIG"; payload: Partial<WeatherConfig> }
  | { type: "RESET_CONFIG" }
  | { type: "SET_MEASUREMENT_SYSTEM"; payload: "imperial" | "metric" };
