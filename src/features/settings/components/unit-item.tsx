import Button from "@/shared/ui/button/button";
import style from "./unit.module.css";

interface Props {
  item: string;
}

export default function UnitItem({ item }: Props) {
  return (
    <li className={style["unit-item"]}>
      <Button>{item}</Button>
    </li>
  );
}
