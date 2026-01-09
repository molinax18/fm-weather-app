import type {
  UnitKeys,
  UnitSettingOption,
} from "@/features/unit-settings/unit.type";
import { useGlobalContext } from "@/context/global/global.context";
import CheckmarkIcon from "@/shared/components/svg/checkmark-icon";
import Button from "@/shared/components/button/button";
import style from "./unit.module.css";

interface Props {
  option: UnitSettingOption;
  type: UnitKeys;
}

export default function UnitItem({ option, type }: Props) {
  const { countryConfig, dispatch } = useGlobalContext();
  const isSelectedOption = countryConfig[type] === option.value;

  return (
    <li className={style["unit-item"]}>
      <Button
        data-selected={isSelectedOption}
        disabled={isSelectedOption}
        onClick={() =>
          dispatch({
            type: "UPDATE_CONFIG",
            payload: { [type]: option.value },
          })
        }
      >
        {option.label}
        {isSelectedOption && <CheckmarkIcon />}
      </Button>
    </li>
  );
}
