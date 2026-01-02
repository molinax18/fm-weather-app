import { globalContextReducer } from './global.reducer';
import type {
  GlobalContextProps,
  GlobalProvider,
  GlobalState,
} from './global.type';
import { createContext, useContext, useReducer } from 'react';

const INITIAL_STATE: GlobalState = {
  countryConfig: {
    measurementSystem: 'imperial',
    temperature: 'celsius',
    windSpeed: 'kmh',
    precipitation: 'mm',
  },
  countryInfo: null,
} as const;

const GlobalContext = createContext<GlobalContextProps | null>(null);

export const GlobalContextProvider = ({ children }: GlobalProvider) => {
  const [state, dispatch] = useReducer(globalContextReducer, INITIAL_STATE);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () =>
  useContext(GlobalContext) as GlobalContextProps;
