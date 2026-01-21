import { round } from "./round";

export interface Temperature {
  celsius: number;
  fahrenheit: number;
}

export interface WindSpeed {
  kmh: number;
  mph: number;
}

export interface Precipitation {
  mm: number;
  inch: number;
}

export function temperatureFromCelsius(
  celsius: number,
  decimals = 0,
): Temperature {
  return {
    celsius: round(celsius, decimals),
    fahrenheit: round((celsius * 9) / 5 + 32, decimals),
  };
}

export function windSpeedFromKmh(kmh: number, decimals = 0): WindSpeed {
  return {
    kmh: round(kmh, decimals),
    mph: round(kmh / 1.60934, decimals),
  };
}

export function precipitationFromMm(mm: number, decimals = 0): Precipitation {
  return {
    mm: round(mm, decimals),
    inch: round(mm / 25.4, decimals),
  };
}
