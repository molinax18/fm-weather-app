import style from "./current-weather.module.css";

interface Props {
  unitType: string;
  value: string;
}

export default function CurrentWeatherUnitCard({ unitType, value }: Props) {
  return (
    <article
      className={`card p-card-sm flex-col ${style["current-weather-unit-card"]}`}
    >
      <h4 className="subtitle text-preset-sm">{unitType}</h4>
      <strong className={`title ${style["current-weather-unit-card-value"]}`}>
        {value}
      </strong>
    </article>
  );
}
