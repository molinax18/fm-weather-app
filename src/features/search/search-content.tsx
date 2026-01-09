import type { WeatherSearchResponse } from "@/services/weather/weather.type";
import Button from "@/shared/components/button/button";
import style from "./search.module.css";
import { useQuery } from "@tanstack/react-query";
import { getWeatherForecastData } from "@/services/weather/weather-forecast.service";
import { API_KEY } from "@/services/weather/weather.constant";
import { useState } from "react";

interface Props {
  data: WeatherSearchResponse[];
}

export default function SearchContent({ data }: Props) {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const { isLoading } = useQuery({
    queryKey: ["weatherForecast"],
    queryFn: () =>
      getWeatherForecastData({ key: API_KEY, q: selectedLocation }),
    enabled: !!selectedLocation,
  });

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
