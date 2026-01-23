import { useCallback, useMemo, useState } from "react";
import type {
  DailyForecast,
  HourlyForecast,
} from "@/context/global/weather.type";
import type { Temperature } from "@/shared/utils/open-meteo/transform-units";
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

  const allDays = useMemo(() => {
    return daily.date.map((date, index) => ({
      label: dayjs(date).format("dddd"),
      index: index,
      date: date,
    }));
  }, [daily.date]);

  const handleCurrentDay = useCallback(
    (name: string) => {
      const targetDay = allDays.find((day) => day.label === name);
      if (targetDay) setCurrentDayIndex(targetDay.index);
    },
    [currentDate],
  );

  const availableDays = allDays
    .filter((day) => !dayjs(day.date).isSame(currentDate, "day"))
    .map((day) => day.label);

  const hourlyDataForDay = useMemo(() => {
    return hourly.date.reduce((acc, date, index) => {
      if (dayjs(currentDate).isSame(date, "day")) {
        acc.push({
          date: hourly.date[index],
          temperature: hourly.temperature[index],
          weather_code: hourly.weather_code[index],
        });
      }
      return acc;
    }, [] as HourlyInfo[]);
  }, [currentDate]);

  return {
    currentDate,
    handleCurrentDay,
    availableDays,
    hourlyDataForDay,
  };
}
