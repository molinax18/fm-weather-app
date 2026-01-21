import type {
  Precipitation,
  Temperature,
  WindSpeed,
} from "@/utils/open-meteo/transform-units";

export interface CurrentForecast {
  date: Date;
  temperature: Temperature;
  apparent_temperature: Temperature;
  weather_code: number;
  precipitation: Precipitation;
  relative_humidity: number;
  wind_speed: WindSpeed;
}

export interface HourlyForecast {
  date: Date[];
  temperature: Temperature[];
  weather_code: number[];
}

export interface DailyForecast {
  date: Date[];
  temperature_max: Temperature[];
  temperature_min: Temperature[];
  weather_code: number[];
}

export interface WeatherForecast {
  current: CurrentForecast;
  hourly: HourlyForecast;
  daily: DailyForecast;
}

export interface WeatherLocation {
  country: string;
  city: string;
}

export interface WeatherInfo {
  location: WeatherLocation;
  forecast: WeatherForecast;
}
