import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWeatherForecastData } from "@/services/weather/weather-forecast.service";
import { DEFAULT_PARAMS } from "@/services/weather/weather.constant";
import { useDropdownContext } from "@/shared/components/dropdown/dropdown.context";
import type { WeatherSearchResponse } from "@/services/weather/weather.type";
import Button from "@/shared/components/button/button";
import style from "./search.module.css";

interface Props {
  data: WeatherSearchResponse[];
}

export default function SearchContent({ data }: Props) {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const { toggleDropdown } = useDropdownContext();
  const { isLoading, isFetchedAfterMount } = useQuery({
    queryKey: ["weatherForecast"],
    queryFn: () =>
      getWeatherForecastData({ ...DEFAULT_PARAMS, q: selectedLocation }),
    enabled: !!selectedLocation,
  });

  useEffect(() => {
    if (isFetchedAfterMount) {
      toggleDropdown();
      setSelectedLocation("");
    }
  }, [isFetchedAfterMount]);

  return (
    <ul className="flex-col card p-card-xs">
      {data.map(({ country, name }) => {
        const locationQuery = `${name}, ${country}`;

        return (
          <li key={locationQuery} className={style["search-content-item"]}>
            <Button
              onClick={() => setSelectedLocation(locationQuery)}
              disabled={isLoading && selectedLocation === locationQuery}
            >
              {country}: {name}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
