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

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(globalContextReducer, INITIAL_STATE);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () =>
  useContext(GlobalContext) as GlobalContextProps;
