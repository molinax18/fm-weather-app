import type { WeatherResponseCondition } from "@/services/weather/weather.type";
import type {
  Measurement,
  Precipitation,
  Temperature,
  WindSpeed,
} from "@/shared/types/units";

export interface CountryForecast {
  day: CountryDay[];
  hour: CountryHour[];
}

export interface CountryLocation {
  city: string;
  country: string;
  condition: WeatherResponseCondition;
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
  condition: WeatherResponseCondition;
}

export interface CountryDay {
  date: string;
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
  condition: WeatherResponseCondition;
}

interface CountryHour {
  time: string;
  temperature: {
    celsius: number;
    fahrenheit: number;
  };
  condition: WeatherResponseCondition;
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
