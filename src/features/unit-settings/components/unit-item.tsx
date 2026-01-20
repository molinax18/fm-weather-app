import type {
  UnitKeys,
  UnitSettingOption,
} from "@/features/unit-settings/unit.type";
import { useGlobalContext } from "@/context/global/open-meteo/global.context";
import { useDropdownContext } from "@/shared/components/dropdown/dropdown.context";
import CheckmarkIcon from "@/shared/components/svg/checkmark-icon";
import Button from "@/shared/components/button/button";
import style from "./unit.module.css";

interface Props {
  option: UnitSettingOption;
  type: UnitKeys;
}

export default function UnitItem({ option, type }: Props) {
  const { weatherConfig, dispatch } = useGlobalContext();
  const { toggleDropdown } = useDropdownContext();
  const isSelectedOption = weatherConfig[type] === option.value;

  return (
    <li className={style["unit-item"]}>
      <Button
        data-selected={isSelectedOption}
        disabled={isSelectedOption}
        onClick={() => {
          dispatch({
            type: "UPDATE_CONFIG",
            payload: { [type]: option.value },
          });
          toggleDropdown();
        }}
      >
        {option.label}
        {isSelectedOption && <CheckmarkIcon />}
      </Button>
    </li>
  );
}
