import type { CountryCurrent } from "@/context/global/country-type";
import { useGlobalContext } from "@/context/global/global.context";
import {
  formatPrecipitation,
  formatTemperature,
  formatWind,
} from "@/features/weather/weather-utils";
import CurrentWeatherUnitCard from "./current-weather-unit-card";
import style from "./current-weather-unit.module.css";

interface Props {
  current: CountryCurrent;
}

export default function CurrentWeatherUnits({ current }: Props) {
  const {
    state: { countryConfig },
  } = useGlobalContext();

  return (
    <div className={`${style["current-weather-units"]} gap-md`}>
      <CurrentWeatherUnitCard
        unitType="Feels Like"
        value={formatTemperature(
          current.temperature,
          countryConfig.temperature,
        )}
      />
      <CurrentWeatherUnitCard
        unitType="Humidity"
        value={`${current.humidity}%`}
      />
      <CurrentWeatherUnitCard
        unitType="Wind"
        value={formatWind(current.wind, countryConfig.windSpeed)}
      />
      <CurrentWeatherUnitCard
        unitType="Precipitation"
        value={formatPrecipitation(
          current.precipitation,
          countryConfig.precipitation,
        )}
      />
    </div>
  );
}
