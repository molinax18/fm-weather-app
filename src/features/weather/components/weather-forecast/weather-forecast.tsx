import type { CountryForecast } from "@/context/global/country-type";
import DailyForecast from "./daily/daily-forecast";
import style from "@/features/weather/components/weather.module.css";

interface Props {
  forecast: CountryForecast;
}

export default function WeatherForecast({ forecast }: Props) {
  const { day } = forecast;

  return (
    <div className={`flex-col ${style["weather-forecast"]}`}>
      <section className={`flex-col ${style["weather-forecast"]}`}>
        <h3 className="title">Daily forecast</h3>
        <DailyForecast data={day} />
      </section>
    </div>
  );
}
