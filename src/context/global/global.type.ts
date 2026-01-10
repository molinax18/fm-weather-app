import type { ActionDispatch, ReactNode } from "react";
import type { CountryConfig, CountryInfo } from "./country.type";
export interface GlobalProviderProps {
  children: ReactNode;
}

export interface GlobalContextProps {
  countryConfig: CountryConfig;
  dispatch: ActionDispatch<[action: GlobalActionType]>;
  countryInfo: CountryInfo | null;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
}

export type GlobalActionType =
  | { type: "UPDATE_CONFIG"; payload: Partial<CountryConfig> }
  | { type: "RESET_CONFIG" }
  | { type: "SET_MEASUREMENT_SYSTEM"; payload: "imperial" | "metric" };
