import { UNIT_SETTINGS } from "@/features/unit-settings/unit.constant";
import { useGlobalContext } from "@/context/global/global.context";
import { toCapitalize } from "@/shared/utils/capitalize";
import { useDropdownContext } from "@/shared/components/dropdown/dropdown.context";
import type { Measurement } from "@/shared/types/units";
import Button from "@/shared/components/button/button";
import UnitSection from "./unit-section";
import style from "./unit.module.css";

export default function UnitContent() {
  const { weatherConfig, dispatch } = useGlobalContext();
  const { toggleDropdown } = useDropdownContext();
  const nextMeasurementSystem: Measurement =
    weatherConfig.measurementSystem === "imperial" ? "metric" : "imperial";

  return (
    <div
      className={`card p-card-xs flex-col gap-xs ${style["unit-content-wrapper"]}`}
    >
      <div>
        <Button
          onClick={() => {
            dispatch({
              type: "SET_MEASUREMENT_SYSTEM",
              payload: nextMeasurementSystem,
            });
            toggleDropdown();
          }}
          className={style["unit-content-button"]}
        >
          Switch to {toCapitalize(nextMeasurementSystem)}
        </Button>
      </div>

      {UNIT_SETTINGS.map((setting) => (
        <UnitSection key={setting.type} setting={setting} />
      ))}
    </div>
  );
}
