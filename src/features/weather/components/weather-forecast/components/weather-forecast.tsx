import type { CountryForecast } from "@/context/global/country-type";
import DailyForecast from "@/features/weather/components/weather-forecast/components/daily/daily-forecast";
import HourlyForecast from "@/features/weather/components/weather-forecast/components/hourly/hourly-forecast";

interface Props {
  forecast: CountryForecast;
}

export default function WeatherForecast({ forecast }: Props) {
  return (
    <div className="flex-col gap-lg">
      <DailyForecast data={forecast.day} />
      <HourlyForecast data={forecast} />
    </div>
  );
}
