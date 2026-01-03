import type { UnitConfig } from "./unit.type";

export const UNIT_SETTINGS: UnitConfig[] = [
  {
    type: "Temperature",
    options: [
      { label: "Celsius (°C)", value: "celsius" },
      { label: "Fahrenheit (°F)", value: "fahrenheit" },
    ],
  },
  {
    type: "Wind speed",
    options: [
      { label: "km/h", value: "kmh" },
      { label: "mph", value: "mph" },
    ],
  },
  {
    type: "Precipitation",
    options: [
      { label: "Millimeters (mm)", value: "mm" },
      { label: "Inches (in)", value: "in" },
    ],
  },
] as const;
