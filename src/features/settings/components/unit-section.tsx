import type { UnitConfig } from "@/features/settings/unit.type";
import UnitItem from "./unit-item";
import style from "./unit.module.css";

interface Props {
  content: UnitConfig;
}

export default function UnitSection({ content }: Props) {
  const { type, options } = content;

  return (
    <section className={`flex-col ${style["unit-section"]}`}>
      <h4
        className={`subtitle text-preset-small ${style["unit-section-subtitle"]}`}
      >
        {type}
      </h4>
      <ul>
        {options.map((op) => (
          <UnitItem key={op.value} item={op.label} />
        ))}
      </ul>
    </section>
  );
}
