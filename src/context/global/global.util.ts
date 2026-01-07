import { getApproximateUserLocation } from "@/services/user-location.service";
import { getWeatherForecastData } from "@/services/weather/weather-forecast.service";
import { DEFAULT_PARAMS } from "@/services/weather/weather.constant";

export async function fetchWeatherData() {
  const location = await getApproximateUserLocation();

  const query = location
    ? `${location.country} ${location.city}`
    : DEFAULT_PARAMS.q;

  const data = await getWeatherForecastData({
    ...DEFAULT_PARAMS,
    q: query,
  });

  if (!data) {
    throw new Error(
      "We could'nt connect to the weather service. Please try again in a few moments",
    );
  }

  return data;
}
