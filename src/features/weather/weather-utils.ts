import type {
  Condition,
  Precipitation,
  Temperature,
  WindSpeed,
} from "@/shared/types/units";
import { WEATHER_ICONS } from "./weather-icons.constant";

type TempUnit = { celsius: number; fahrenheit: number };
type WindUnit = { kph: number; mph: number };
type PressureUnit = { mm: number; in: number };

export const formatTemperature = (
  values: TempUnit,
  unit: Temperature,
): string => {
  return unit === "celsius"
    ? `${Math.round(values.celsius)}°`
    : `${Math.round(values.fahrenheit)}°`;
};

export const formatWind = (values: WindUnit, unit: WindSpeed): string => {
  return unit === "kph"
    ? `${Math.round(values.kph)} kph`
    : `${Math.round(values.mph)} mph`;
};

export const formatPrecipitation = (
  values: PressureUnit,
  unit: Precipitation,
): string => {
  return unit === "mm"
    ? `${Math.round(values.mm)} mm`
    : `${Math.round(values.in)} in`;
};

export const displayWeatherIcon = (condition: Condition) => {
  return WEATHER_ICONS[condition] || WEATHER_ICONS["Sunny"];
};
