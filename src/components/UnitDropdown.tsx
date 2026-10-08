import { useState } from "react";
import { DropdownMenu } from "radix-ui";

import Button from "./ui/Button";
import Dropdown from "../assets/images/icon-dropdown.svg?react";
import Units from "../assets/images/icon-units.svg?react";
import CheckMark from "../assets/images/icon-checkmark.svg?react";
import type {
  Precipitation,
  Temperature,
  WindSpeed,
} from "../services/types/units.type";

interface DropdownList {
  label: string;
  temperature: Array<{
    label: string;
    value: Temperature;
  }>;
  wind_speed: Array<{
    label: string;
    value: WindSpeed;
  }>;
  precipitation: Array<{
    label: string;
    value: Precipitation;
  }>;
}

interface Units {
  temperature: Temperature;
  wind_speed: WindSpeed;
  precipitation: Precipitation;
}

const INITIAL_VALUES: Units = {
  temperature: "°C",
  wind_speed: "km/h",
  precipitation: "mm",
};

export default function UnitDropdown() {
  const [units, setUnits] = useState<Units>(INITIAL_VALUES);
  const dropdownList: DropdownList = {
    label: `Switch to ${units.temperature === "°C" ? "Imperial" : "Metric"}`,
    temperature: [
      {
        label: "Celsius (°C)",
        value: "°C",
      },
      {
        label: "Fahrenheit (°F)",
        value: "°F",
      },
    ],
    wind_speed: [
      {
        label: "km/h",
        value: "km/h",
      },
      {
        label: "mph",
        value: "mph",
      },
    ],
    precipitation: [
      {
        label: "Milimeters (mm)",
        value: "mm",
      },
      {
        label: "Inches (in)",
        value: "inch",
      },
    ],
  };
  const switchUnits = () => {
    if (units.temperature === "°F") {
      setUnits((units) => ({
        ...units,
        temperature: "°C",
        wind_speed: "km/h",
        precipitation: "mm",
      }));
      return;
    }

    setUnits((units) => ({
      ...units,
      temperature: "°F",
      wind_speed: "mph",
      precipitation: "inch",
    }));
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button className="flex items-center gap-x-2 cursor-pointer">
          <span>
            <Units aria-hidden="true" />
          </span>
          <span>Units</span>
          <span>
            <Dropdown aria-hidden="true" />
          </span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="flex flex-col gap-y-2 main-card p-2 dropdown-animation w-50"
          sideOffset={12}
          align="end"
        >
          <DropdownMenu.Item asChild>
            <Button className="text-start" onClick={switchUnits}>
              {dropdownList.label}
            </Button>
          </DropdownMenu.Item>

          <DropdownMenu.RadioGroup
            value={units.temperature}
            onValueChange={(temperature) =>
              setUnits((current) => ({
                ...current,
                temperature: temperature as Temperature,
              }))
            }
          >
            <DropdownMenu.Label className="pl-2 font-bricolage-grotesque">
              Temperature
            </DropdownMenu.Label>
            {dropdownList.temperature.map((el) => (
              <DropdownMenu.RadioItem value={el.value} key={el.value} asChild>
                <Button className="w-full flex items-center justify-between">
                  {el.label}
                  <DropdownMenu.ItemIndicator>
                    <CheckMark />
                  </DropdownMenu.ItemIndicator>
                </Button>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>

          <DropdownMenu.RadioGroup
            value={units.wind_speed}
            onValueChange={(wind_speed) =>
              setUnits((current) => ({
                ...current,
                wind_speed: wind_speed as WindSpeed,
              }))
            }
          >
            <DropdownMenu.Label className="pl-2 font-bricolage-grotesque">
              Wind Speed
            </DropdownMenu.Label>
            {dropdownList.wind_speed.map((el) => (
              <DropdownMenu.RadioItem value={el.value} key={el.value} asChild>
                <Button className="w-full flex items-center justify-between">
                  {el.label}
                  <DropdownMenu.ItemIndicator>
                    <CheckMark />
                  </DropdownMenu.ItemIndicator>
                </Button>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>

          <DropdownMenu.RadioGroup
            value={units.precipitation}
            onValueChange={(precipitation) =>
              setUnits((current) => ({
                ...current,
                precipitation: precipitation as Precipitation,
              }))
            }
          >
            <DropdownMenu.Label className="pl-2 font-bricolage-grotesque">
              Precipitation
            </DropdownMenu.Label>
            {dropdownList.precipitation.map((el) => (
              <DropdownMenu.RadioItem value={el.value} key={el.value} asChild>
                <Button className="w-full flex items-center justify-between">
                  {el.label}
                  <DropdownMenu.ItemIndicator>
                    <CheckMark />
                  </DropdownMenu.ItemIndicator>
                </Button>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
