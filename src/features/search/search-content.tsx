import { useDropdownContext } from "@/shared/components/dropdown/dropdown.context";
import { CircleFlag } from "react-circle-flags";
import type { CountryInfoResponse } from "@/services/weather/open-meteo/weather.type";
import Button from "@/shared/components/button/button";
import style from "./search.module.css";

interface Props {
  data: CountryInfoResponse[] | undefined;
}

export default function SearchContent({ data }: Props) {
  const { toggleDropdown } = useDropdownContext();

  return (
    <ul className={`flex-col card p-card-xs ${style["search-content"]}`}>
      {!data ? (
        <span>No se ha encontrado ningún lugar relacionado.</span>
      ) : (
        data.map(({ id, name, country_code, latitude, longitude }) => {
          return (
            <li key={id} className={style["search-content-item"]}>
              <Button
                onClick={toggleDropdown}
                className={`flex-col gap-xs ${style["search-content-item-button"]}`}
              >
                <div>
                  <CircleFlag
                    countryCode={country_code.toLowerCase()}
                    height={20}
                  />
                  <span>{name}</span>
                </div>

                <div
                  className={
                    style["search-content-item-button-country-location"]
                  }
                >
                  <span>{latitude}°N</span>
                  <span>{longitude}°E</span>
                </div>
              </Button>
            </li>
          );
        })
      )}
    </ul>
  );
}
