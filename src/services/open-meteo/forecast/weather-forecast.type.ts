export type CurrentVariable =
  | "temperature_2m"
  | "precipitation"
  | "apparent_temperature"
  | "weather_code"
  | "relative_humidity_2m"
  | "wind_speed_10m";

export type DailyVariable =
  | "temperature_2m_max"
  | "temperature_2m_min"
  | "weather_code";

export type HourlyVariable = "temperature_2m" | "weather_code";

export interface WeatherForecastParams {
  latitude: number;
  longitude: number;
  current?: CurrentVariable[];
  hourly?: HourlyVariable[];
  daily?: DailyVariable[];
  timezone?: "auto" | string;
}

export interface Hourly {
  time: string[];
  temperature_2m: number[];
  apparent_temperature: number[];
  wind_speed_10m: number[];
  precipitation: number[];
  weather_code: number[];
}

export interface Daily {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weather_code: number[];
}

export interface Current {
  time: string;
  interval: number;
  temperature_2m: number;
  apparent_temperature: number;
  weather_code: number;
  precipitation: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
}

export interface HourlyUnit {
  time: string;
  temperature_2m: string;
}

export interface DailyUnits {
  time: string;
  weather_code: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
}

export interface CurrentUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  apparent_temperature: string;
  weather_code: string;
  precipitation: string;
  relative_humidity_2m: string;
  wind_speed_10m: string;
}

export interface WeatherForecastResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentUnits;
  current: Current;
  hourly_units: HourlyUnit;
  hourly: Hourly;
  daily_units: DailyUnits;
  daily: Daily;
}
