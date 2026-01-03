import type { UnitSetting } from "@/features/unit-settings/unit.type";
import UnitItem from "./unit-item";
import style from "./unit.module.css";

interface Props {
  setting: UnitSetting;
}

export default function UnitSection({ setting }: Props) {
  const { type, options, label } = setting;

  return (
    <section className={`flex-col ${style["unit-section"]}`}>
      <h4
        className={`subtitle text-preset-small ${style["unit-section-subtitle"]}`}
      >
        {label}
      </h4>
      <ul className={`flex-col ${style["unit-section-list"]}`}>
        {options.map((option) => (
          <UnitItem key={option.label} type={type} option={option} />
        ))}
      </ul>
    </section>
  );
}
