import { useGlobalContext } from "@/context/global/open-meteo/global.context";
import type { CurrentForecast } from "@/context/global/open-meteo/weather.type";
import CurrentWeatherUnitCard from "./current-weather-unit-card";
import style from "./current-weather-unit.module.css";

interface Props {
  current: CurrentForecast;
}

export default function CurrentWeatherUnits({ current }: Props) {
  const { weatherConfig } = useGlobalContext();
  const { apparent_temperature, precipitation, wind_speed, relative_humidity } =
    current;

  return (
    <div className={`${style["current-weather-units"]} gap-md`}>
      <CurrentWeatherUnitCard
        unitType="Feels Like"
        value={`${apparent_temperature[weatherConfig.temperature]}°`}
      />
      <CurrentWeatherUnitCard
        unitType="Humidity"
        value={`${relative_humidity}%`}
      />
      <CurrentWeatherUnitCard
        unitType="Wind"
        value={`${wind_speed[weatherConfig.windSpeed]} ${weatherConfig.windSpeed}`}
      />
      <CurrentWeatherUnitCard
        unitType="Precipitation"
        value={`${precipitation[weatherConfig.precipitation]} ${weatherConfig.precipitation}`}
      />
    </div>
  );
}
