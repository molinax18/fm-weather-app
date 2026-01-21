import type { WeatherLocation } from "@/context/global/open-meteo/weather.type";
import type { UserLocationResponse } from "./user-location.type";

export function userLocationAdapter(
  locationInfo: UserLocationResponse,
): WeatherLocation {
  const { cityName, countryName } = locationInfo;

  return {
    city: cityName,
    country: countryName,
  };
}
