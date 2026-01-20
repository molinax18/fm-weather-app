import type { Hourly } from "@/services/weather/open-meteo/forecast/weather-forecast.type";
import type { HourlyForecast } from "@/context/global/open-meteo/weather.type";

import {
  precipitationFromMm,
  temperatureFromCelsius,
  windSpeedFromKmh,
} from "./transform-units";

function zipByIndex<T>(length: number, mapper: (i: number) => T): T[] {
  return Array.from({ length }, (_, i) => mapper(i));
}

export function adaptHourly(h: Hourly): HourlyForecast[] {
  const length = h.time.length;

  return zipByIndex(length, (i) => ({
    time: new Date(h.time[i]),
    temperature: temperatureFromCelsius(h.temperature_2m[i]),
    apparentTemperature: temperatureFromCelsius(h.apparent_temperature[i]),
    windSpeed: windSpeedFromKmh(h.wind_speed_10m[i]),
    precipitation: precipitationFromMm(h.precipitation[i]),
  }));
}
