import type { Temperature } from "@/utils/open-meteo/transform-units";
import { useGlobalContext } from "@/context/global/open-meteo/global.context";
import style from "./daily-forecast.module.css";
import dayjs from "dayjs";

interface DailyInfo {
  date: Date;
  temperature_max: Temperature;
  temperature_min: Temperature;
  weather_code: number;
}

interface Props {
  dailyInfo: DailyInfo;
}

export default function DailyForecastCard({ dailyInfo }: Props) {
  const { weatherConfig } = useGlobalContext();
  const { date, temperature_max, temperature_min } = dailyInfo;

  return (
    <article
      className={`card p-card-sm flex-col gap-md ${style["daily-forecast-card"]}`}
    >
      <h4>{dayjs(date).format("ddd")}</h4>
      {/*<img
        src={condition.icon}
        alt={condition.text}
        className={style["daily-forecast-image"]}
      />*/}
      <div className={style["daily-forecast-temperature"]}>
        <strong className="title">
          {`${temperature_max[weatherConfig.temperature]}°`}
        </strong>
        <span>{`${temperature_min[weatherConfig.temperature]}°`}</span>
      </div>
    </article>
  );
}
