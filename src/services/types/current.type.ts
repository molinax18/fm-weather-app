import type {
  Time,
  Interval,
  Temperature,
  Relative,
  WindSpeed,
  Precipitation,
  WeatherCode,
} from "./units.type";

export interface CurrentData {
  time: string;
  interval: string;
  temperature_2m?: number;
  apparent_temperature?: number;
  relative_humidity_2m?: number;
  wind_speed_10m?: number;
  precipitation_probability?: number;
  weather_code?: number;
}

export interface CurrentUnits {
  time: Time;
  interval: Interval;
  temperature_2m?: Temperature;
  apparent_temperature?: number;
  relative_humidity_2m?: Relative;
  wind_speed_10m?: WindSpeed;
  precipitation_probability?: Precipitation;
  weather_code?: WeatherCode;
}
