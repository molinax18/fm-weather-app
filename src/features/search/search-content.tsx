import type { WeatherSearchResponse } from "@/services/weather/weather.type";
import Button from "@/shared/components/button/button";
import style from "./search.module.css";

interface Props {
  data: WeatherSearchResponse[];
}
export default function SearchContent({ data }: Props) {
  return (
    <ul className="flex-col card p-card-xs">
      {data.map(({ country, name }) => (
        <li className={style["search-content-item"]}>
          <Button>
            {country}: {name}
          </Button>
        </li>
      ))}
    </ul>
  );
}
