import { UNIT_SETTINGS } from "@/features/unit-settings/unit.constant";
import { useGlobalContext } from "@/context/global/global.context";
import { toCapitalize } from "@/utils/capitalize";
import type { Measurement } from "@/types/units";
import Button from "@/shared/ui/button/button";
import UnitSection from "./unit-section";
import style from "./unit.module.css";

export default function UnitContent() {
  const { state, dispatch } = useGlobalContext();
  const nextMeasurementSystem: Measurement =
    state.countryConfig.measurementSystem === "imperial"
      ? "metric"
      : "imperial";

  return (
    <div className={`card p-card-xs flex-col ${style["unit-content-wrapper"]}`}>
      <div>
        <Button
          onClick={() => dispatch({ type: "TOGGLE_MEASUREMENT_SYSTEM" })}
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
