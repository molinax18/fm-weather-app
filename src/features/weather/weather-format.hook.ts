import type { Temperature } from "@/shared/types/units";

export function useWeatherFormat(
  temperature: Temperature,
  time: string,
  t: { celsius: number; fahrenheit: number },
) {
  const date = new Date(time);

  const day = date.toLocaleString("en-EN", { weekday: "long" });
  const month = date.toLocaleString("en-EN", { month: "short" });
  const dayNumber = date.getDate();
  const year = date.getFullYear();

  const isCelsius = temperature === "celsius";
  const tempValue = isCelsius ? t.celsius : t.fahrenheit;

  return {
    formattedDate: `${day}, ${month} ${dayNumber}, ${year}`,
    tempValue,
  };
}
