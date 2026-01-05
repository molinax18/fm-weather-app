import type { ActionDispatch, ReactNode } from "react";
import type { CountryConfig, CountryInfo } from "./country-type";

export interface GlobalState {
  countryConfig: CountryConfig;
  countryInfo: CountryInfo | null;
}

export interface GlobalProviderProps {
  children: ReactNode;
}

export interface GlobalContextProps {
  state: GlobalState;
  dispatch: ActionDispatch<[action: GlobalActionType]>;
}

export type GlobalActionType =
  | {
      type: "TOGGLE_MEASUREMENT_SYSTEM";
    }
  | {
      type: "HANDLE_MEASUREMENTS_CONFIG";
      payload: Partial<Omit<CountryConfig, "measurementSystem">>;
    }
  | {
      type: "SET_LOCATION";
      payload: CountryInfo | null;
    };
