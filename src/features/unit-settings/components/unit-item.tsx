import type {
  UnitKeys,
  UnitSettingOption,
} from "@/features/unit-settings/unit.type";
import { useGlobalContext } from "@/context/global/global.context";
import CheckmarkIcon from "@/shared/ui/svg/checkmark-icon";
import Button from "@/shared/ui/button/button";
import style from "./unit.module.css";

interface Props {
  option: UnitSettingOption;
  type: UnitKeys;
}

export default function UnitItem({ option, type }: Props) {
  const { state, dispatch } = useGlobalContext();
  const isSelectedOption = state.countryConfig[type] === option.value;

  return (
    <li className={style["unit-item"]}>
      <Button
        data-selected={isSelectedOption}
        disabled={isSelectedOption}
        onClick={() =>
          dispatch({
            type: "HANDLE_MEASUREMENTS_CONFIG",
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
