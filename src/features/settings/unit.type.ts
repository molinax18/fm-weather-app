import type { Precipitation, Temperature, WindSpeed } from "@/types/units";

export interface UnitOption {
  label: string;
  value: Temperature | WindSpeed | Precipitation;
}

export interface UnitConfig {
  type: string;
  options: UnitOption[];
}
