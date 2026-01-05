import type {
  Measurement,
  Precipitation,
  Temperature,
  WindSpeed,
} from "@/shared/types/units";

interface CountryForecast {
  day: CountryDay[];
  hour: CountryHour[];
}

export interface CountryLocation {
  city: string;
  country: string;
  condition: string;
  temperature: {
    celsius: number;
    fahrenheit: number;
  };
  time: string;
}

export interface CountryCurrent {
  feelsLike: {
    celsius: number;
    fahrenheit: number;
  };
  temperature: {
    celsius: number;
    fahrenheit: number;
  };
  wind: {
    mph: number;
    kph: number;
  };
  precipitation: {
    mm: number;
    in: number;
  };
  humidity: number;
  condition: string;
}

interface CountryDay {
  temperature: {
    max: {
      celsius: number;
      fahrenheit: number;
    };
    min: {
      celsius: number;
      fahrenheit: number;
    };
  };
  condition: string;
}

interface CountryHour {
  time: string;
  temperature: {
    celsius: number;
    fahrenheit: number;
  };
  condition: string;
}

export interface CountryConfig {
  measurementSystem: Measurement;
  temperature: Temperature;
  windSpeed: WindSpeed;
  precipitation: Precipitation;
}

export interface CountryInfo {
  location: CountryLocation;
  current: CountryCurrent;
  forecast: CountryForecast;
}
