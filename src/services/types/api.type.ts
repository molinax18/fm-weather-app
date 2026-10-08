import type { CurrentData, CurrentUnits } from "./current.type";
import type { DailyData, DailyUnits } from "./daily.type";
import type { HourlyData, HourlyUnits } from "./hourly.type";

interface Base {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: string;
}

export interface WeatherResponse extends Base {
  current_units?: CurrentUnits;
  current?: CurrentData;
  hourly_units?: HourlyUnits;
  hourly?: HourlyData;
  daily_units?: DailyUnits;
  daily?: DailyData;
}

export interface WeatherErrorResponse {
  error: boolean;
  reason: string;
}
