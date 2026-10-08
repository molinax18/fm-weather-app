import type { Time, Temperature, WeatherCode } from "./units.type";

export interface DailyData {
  time: string[];
  weather_code?: string[];
  temperature_2m_max?: string[];
  temperature_2m_min?: string[];
}

export interface DailyUnits {
  time: Time;
  weather_code?: WeatherCode;
  temperature_2m_max?: Temperature;
  temperature_2m_min?: Temperature;
}
