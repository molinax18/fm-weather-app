import type {
  Precipitation,
  Temperature,
  WindSpeed,
} from "@/shared/types/units";
import type { WeatherConfig } from "@/context/global/global.type";

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
