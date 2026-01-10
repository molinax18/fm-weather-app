import type { CountryInfo } from "@/context/global/country.type";
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
      precip_in,
      precip_mm,
    },
    location: { name, country, localtime },
    forecast: { forecastday },
  } = data;

  return {
    current: {
      condition: condition,
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
      precipitation: {
        mm: precip_mm,
        in: precip_in,
      },
    },
    location: {
      city: name,
      country: country,
      condition: condition,
      temperature: {
        celsius: temp_c,
        fahrenheit: temp_f,
      },
      time: localtime,
    },
    forecast: {
      day: forecastday.map((day) => ({
        date: day.date,
        condition: day.day.condition,
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
      })),
      hour: forecastday.flatMap((day) =>
        day.hour.map((hour) => ({
          time: hour.time,
          condition: hour.condition,
          temperature: {
            celsius: hour.temp_c,
            fahrenheit: hour.temp_f,
          },
        })),
      ),
    },
  };
}
