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

interface CountryLocation {
  city: string;
  country: string;
  timezone: string;
  condition: string;
}

interface CountryCurrent {
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
  humidity: number;
  condition: string;
}

interface CountryDay {
  day: {
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
  };
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
