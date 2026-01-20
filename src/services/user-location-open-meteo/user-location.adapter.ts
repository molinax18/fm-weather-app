import type { WeatherCurrent } from "@/context/global/open-meteo/weather.type";
import type { UserLocationResponse } from "./user-location.type";

export function userLocationAdapter(
  locationInfo: UserLocationResponse,
): WeatherCurrent {
  const { cityName, countryName } = locationInfo;

  return {
    city: cityName,
    country: countryName,
  };
}
