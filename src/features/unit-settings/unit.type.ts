import type { Precipitation, Temperature, WindSpeed } from "@/types/units";
import type { CountryConfig } from "@/context/global/global.type";

export type UnitKeys = keyof Omit<CountryConfig, "measurementSystem">;

export interface UnitSettingOption {
  label: string;
  value: Temperature | WindSpeed | Precipitation;
}

export interface UnitSetting {
  label: string;
  type: UnitKeys;
  options: UnitSettingOption[];
}
