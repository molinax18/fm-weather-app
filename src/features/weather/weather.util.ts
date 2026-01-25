import type {
  Precipitation,
  Temperature,
  WindSpeed,
} from "@/shared/types/units";

type TempUnit = { celsius: number; fahrenheit: number };
type WindUnit = { kmh: number; mph: number };
type PressureUnit = { mm: number; inch: number };

export const formatTemperature = (
  values: TempUnit,
  unit: Temperature,
): string => {
  return unit === "celsius"
    ? `${Math.round(values.celsius)}°`
    : `${Math.round(values.fahrenheit)}°`;
};

export const formatWind = (values: WindUnit, unit: WindSpeed): string => {
  return unit === "kmh"
    ? `${Math.round(values.kmh)} kph`
    : `${Math.round(values.mph)} mph`;
};

export const formatPrecipitation = (
  values: PressureUnit,
  unit: Precipitation,
): string => {
  return unit === "mm"
    ? `${Math.round(values.mm)} mm`
    : `${Math.round(values.inch)} inch`;
};
