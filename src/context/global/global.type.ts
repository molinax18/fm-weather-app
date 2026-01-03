import type { ActionDispatch, ReactNode } from "react";
import type {
  Measurement,
  Precipitation,
  Temperature,
  WindSpeed,
} from "@/types/units";

export interface CountryConfig {
  measurementSystem: Measurement;
  temperature: Temperature;
  windSpeed: WindSpeed;
  precipitation: Precipitation;
}

export interface CountryInfo {
  name: string;
  location: string;
}

export interface GlobalState {
  countryConfig: CountryConfig;
  countryInfo: CountryInfo | null;
}

export interface GlobalProviderProps {
  children: ReactNode;
}

export interface GlobalContextProps {
  state: GlobalState;
  dispatch: ActionDispatch<[action: null]>;
}
