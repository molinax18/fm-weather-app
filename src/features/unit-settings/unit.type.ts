import type {
  Precipitation,
  Temperature,
  WindSpeed,
} from "@/shared/types/units";
import type { CountryConfig } from "@/context/global/country.type";

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
