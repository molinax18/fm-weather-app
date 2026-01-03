import { UNIT_SETTINGS } from "@/features/settings/unit.constant";
import UnitSection from "./unit-section";
import Button from "@/shared/ui/button/button";
import style from "./unit.module.css";

export default function UnitContent() {
  return (
    <div className={`card p-card-xs flex-col ${style["unit-content-wrapper"]}`}>
      <div>
        <Button>Switch to imperial</Button>
      </div>

      {UNIT_SETTINGS.map((unit) => (
        <UnitSection key={unit.type} content={unit} />
      ))}
    </div>
  );
}
