import { useGlobalContext } from "@/context/global/open-meteo/global.context";
import type { HourlyForecast } from "@/context/global/open-meteo/weather.type";
import CurrentWeatherUnitCard from "./current-weather-unit-card";
import style from "./current-weather-unit.module.css";

interface Props {
  info: HourlyForecast;
}

export default function CurrentWeatherUnits({ info }: Props) {
  const { weatherConfig } = useGlobalContext();
  const { apparentTemperature, precipitation, windSpeed } = info;

  return (
    <div className={`${style["current-weather-units"]} gap-md`}>
      <CurrentWeatherUnitCard
        unitType="Feels Like"
        value={`${apparentTemperature[weatherConfig.temperature]}°`}
      />
      <CurrentWeatherUnitCard
        unitType="Wind"
        value={`${windSpeed[weatherConfig.windSpeed]} ${weatherConfig.windSpeed}`}
      />
      <CurrentWeatherUnitCard
        unitType="Precipitation"
        value={`${precipitation[weatherConfig.precipitation]} ${weatherConfig.precipitation}`}
      />
    </div>
  );
}
