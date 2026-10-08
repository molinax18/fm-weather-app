import type { Time, Temperature, WeatherCode } from "./units.type";

export interface HourlyData {
  time: string[];
  weather_code: string[];
  temperature_2m?: string[];
}

export interface HourlyUnits {
  time: Time;
  weather_code?: WeatherCode;
  temperature_2m?: Temperature;
}
