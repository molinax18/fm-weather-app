import type { CountryInfo } from "@/context/global/country-type";
import type { WeatherResponse } from "./weather.type";

export function mapToCountryWeather(data: WeatherResponse): CountryInfo {
  const {
    current: {
      condition,
      feelslike_c,
      feelslike_f,
      humidity,
      temp_c,
      temp_f,
      wind_kph,
      wind_mph,
    },
    location: { name, country, tz_id },
    forecast: { forecastday },
  } = data;

  return {
    current: {
      condition: condition.text,
      feelsLike: {
        celsius: feelslike_c,
        fahrenheit: feelslike_f,
      },
      humidity: humidity,
      temperature: {
        celsius: temp_c,
        fahrenheit: temp_f,
      },
      wind: {
        kph: wind_kph,
        mph: wind_mph,
      },
    },
    location: {
      city: name,
      country: country,
      timezone: tz_id,
      condition: condition.text,
    },
    forecast: {
      day: forecastday.map((day) => ({
        day: {
          condition: day.day.condition.text,
          temperature: {
            max: {
              celsius: day.day.maxtemp_c,
              fahrenheit: day.day.maxtemp_f,
            },
            min: {
              celsius: day.day.mintemp_c,
              fahrenheit: day.day.mintemp_f,
            },
          },
        },
      })),
      hour: forecastday.flatMap((day) =>
        day.hour.map((hour) => ({
          time: hour.time,
          condition: hour.condition.text,
          temperature: {
            celsius: hour.temp_c,
            fahrenheit: hour.temp_f,
          },
        })),
      ),
    },
  };
}
