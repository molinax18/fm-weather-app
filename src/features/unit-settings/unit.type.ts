import type {
  Precipitation,
  Temperature,
  WindSpeed,
} from "@/shared/types/open-meteo/units";
import type { WeatherConfig } from "@/context/global/open-meteo/global.type";

export type UnitKeys = keyof Omit<WeatherConfig, "measurementSystem">;

export interface UnitSettingOption {
  label: string;
  value: Temperature | WindSpeed | Precipitation;
}

export interface UnitSetting {
  label: string;
  type: UnitKeys;
  options: UnitSettingOption[];
}
