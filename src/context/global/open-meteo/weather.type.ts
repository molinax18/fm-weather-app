import type {
  Precipitation,
  Temperature,
  WindSpeed,
} from "@/utils/open-meteo/transform-units";

export interface HourlyForecast {
  time: Date;
  temperature: Temperature;
  apparentTemperature: Temperature;
  windSpeed: WindSpeed;
  precipitation: Precipitation;
}

export interface WeatherForecast {
  hourly: HourlyForecast[];
}

export interface WeatherCurrent {
  country: string;
  city: string;
}

export interface WeatherInfo {
  current: WeatherCurrent;
  forecast: WeatherForecast;
}
