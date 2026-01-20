export type HourlyVariable =
  | "temperature_2m"
  | "relative_humidity_2m"
  | "apparent_temperature"
  | "precipitation"
  | "wind_speed_10m";

export interface WeatherForecastParams {
  latitude: number;
  longitude: number;
  hourly?: HourlyVariable[];
  daily?: string[];
  timezone?: "auto" | string;
}

export interface Hourly {
  time: string[];
  temperature_2m: number[];
  apparent_temperature: number[];
  wind_speed_10m: number[];
  precipitation: number[];
}

export interface HourlyUnit {
  time: string;
  temperature_2m: string;
}

export interface WeatherForecastResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: HourlyUnit;
  hourly: Hourly;
}
