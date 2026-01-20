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

export function temperatureFromCelsius(celsius: number): Temperature {
  return {
    celsius,
    fahrenheit: (celsius * 9) / 5 + 32,
  };
}

export function windSpeedFromKmh(kmh: number): WindSpeed {
  return {
    kmh,
    mph: kmh / 1.60934,
  };
}

export function precipitationFromMm(mm: number): Precipitation {
  return {
    mm,
    inch: mm / 25.4,
  };
}
