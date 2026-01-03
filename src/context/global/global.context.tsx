import { createContext, useContext, useReducer } from "react";
import { globalContextReducer } from "./global.reducer";
import type {
  GlobalContextProps,
  GlobalProviderProps,
  GlobalState,
} from "./global.type";

const INITIAL_STATE: GlobalState = {
  countryConfig: {
    measurementSystem: "imperial",
    temperature: "celsius",
    windSpeed: "kmh",
    precipitation: "mm",
  },
  countryInfo: null,
} as const;

const GlobalContext = createContext<GlobalContextProps | null>(null);

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [state, dispatch] = useReducer(globalContextReducer, INITIAL_STATE);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext) as GlobalContextProps;

  if (!context)
    throw new Error("Global components must be used within <GlobalProvider />");

  return context;
}
