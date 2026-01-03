import type { UnitSetting } from "./unit.type";

export const UNIT_SETTINGS: UnitSetting[] = [
  {
    label: "Temperature",
    type: "temperature",
    options: [
      { label: "Celsius (°C)", value: "celsius" },
      { label: "Fahrenheit (°F)", value: "fahrenheit" },
    ],
  },
  {
    label: "Wind Speed",
    type: "windSpeed",
    options: [
      { label: "km/h", value: "kmh" },
      { label: "mph", value: "mph" },
    ],
  },
  {
    label: "Precipitation",
    type: "precipitation",
    options: [
      { label: "Millimeters (mm)", value: "mm" },
      { label: "Inches (in)", value: "in" },
    ],
  },
] as const;
