import { useState } from "react";
import type { CountryForecast } from "@/context/global/country-type";
import dayjs from "dayjs";

export default function useHourlyForecast(forecast: CountryForecast) {
  const { day, hour } = forecast;
  const [currentDate, setCurrentDay] = useState(day[0].date);

  const handleCurrentDay = (index: number) => {
    setCurrentDay(day[index].date);
  };

  const availableDays = day.map((day, index) => ({
    name: dayjs(day.date).format("dddd"),
    date: day.date,
    index: index,
  }));

  const hoursByDate = hour.filter((hour) => {
    const forecastTime = dayjs(hour.time);
    const hourOfDay = forecastTime.hour();
    const isMorningSlot = hourOfDay >= 3 && hourOfDay <= 10;
    return hour.time.startsWith(currentDate) && isMorningSlot;
  });

  return {
    currentDate,
    handleCurrentDay,
    availableDays,
    hoursByDate,
  };
}
