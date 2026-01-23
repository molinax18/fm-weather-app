import type { WeatherLocation } from "@/context/global/weather.type";
import type { WeatherForecastParams } from "@/services/open-meteo/forecast/weather-forecast.type";
import type { CountryInfoResponse } from "@/services/open-meteo/weather.type";
import { getWeatherForecastWithCountryName } from "@/context/global/global.util";
import { useDropdownContext } from "@/shared/components/dropdown/dropdown.context";
import { useEffect, useState } from "react";
import { getWeatherForecast } from "@/services/open-meteo/forecast/weather-forecast.service";
import { forecastParams } from "@/services/open-meteo/forecast/weather-forecast.constant";
import { useWeatherForecast } from "@/hooks/weather-forecast.hook";
import { CircleFlag } from "react-circle-flags";
import Button from "@/shared/components/button/button";
import style from "./search.module.css";

interface Props {
  data: CountryInfoResponse[] | undefined;
}

export interface SelectedLocation {
  location: WeatherLocation;
  weatherOptions: WeatherForecastParams;
}

export default function SearchContent({ data }: Props) {
  const { toggleDropdown } = useDropdownContext();
  const [selectedLocation, setSelectedLocation] = useState<SelectedLocation>();

  const { isLoading, isFetchedAfterMount } = useWeatherForecast({
    fn: async () => {
      if (!selectedLocation) return null;

      return await getWeatherForecastWithCountryName(
        selectedLocation.location,
        getWeatherForecast(selectedLocation.weatherOptions),
      );
    },
    options: {
      enabled: !!selectedLocation,
    },
  });

  useEffect(() => {
    if (isFetchedAfterMount) toggleDropdown();
  }, [isFetchedAfterMount]);

  return (
    <ul className={`flex-col card p-card-xs ${style["search-content"]}`}>
      {!data ? (
        <span>No se ha encontrado ningún lugar relacionado.</span>
      ) : (
        data.map(
          ({ id, name: city, country_code, latitude, longitude, country }) => {
            return (
              <li key={id} className={style["search-content-item"]}>
                <Button
                  onClick={() =>
                    setSelectedLocation({
                      location: {
                        city,
                        country,
                      },
                      weatherOptions: {
                        ...forecastParams,
                        latitude,
                        longitude,
                      },
                    })
                  }
                  disabled={isLoading}
                  className={`flex-col gap-xs ${style["search-content-item-button"]}`}
                >
                  <div>
                    <CircleFlag
                      countryCode={country_code.toLowerCase()}
                      height={20}
                    />

                    <span>{city}</span>
                  </div>

                  <div
                    className={
                      style["search-content-item-button-country-location"]
                    }
                  >
                    <span>{latitude}°N</span>
                    <span>{longitude}°E</span>
                  </div>
                </Button>
              </li>
            );
          },
        )
      )}
    </ul>
  );
}
