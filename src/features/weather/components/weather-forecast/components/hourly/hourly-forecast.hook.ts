import { useState } from "react";
import type {
  DailyForecast,
  HourlyForecast,
} from "@/context/global/open-meteo/weather.type";
import type { Temperature } from "@/utils/open-meteo/transform-units";
import dayjs from "dayjs";

export interface HourlyInfo {
  date: Date;
  temperature: Temperature;
  weather_code: number;
}

export default function useHourlyForecast(
  hourly: HourlyForecast,
  daily: DailyForecast,
) {
  const [currentDateIndex, setCurrentDayIndex] = useState(0);
  const currentDate = daily.date[currentDateIndex];

  const allDays = daily.date.map((date, index) => ({
    label: dayjs(date).format("dddd"),
    index: index,
    date: date,
  }));

  const handleCurrentDay = (name: string) => {
    const targetDay = allDays.find((day) => day.label === name);
    if (targetDay) setCurrentDayIndex(targetDay.index);
  };

  const availableDays = allDays
    .filter((day) => !dayjs(day.date).isSame(currentDate, "day"))
    .map((day) => day.label);

  const hourlyDataForDay = hourly.date.reduce((acc, date, index) => {
    if (dayjs(currentDate).isSame(date, "day")) {
      acc.push({
        date: hourly.date[index],
        temperature: hourly.temperature[index],
        weather_code: hourly.weather_code[index],
      });
    }
    return acc;
  }, [] as HourlyInfo[]);

  return {
    currentDate,
    handleCurrentDay,
    availableDays,
    hourlyDataForDay,
  };
}
