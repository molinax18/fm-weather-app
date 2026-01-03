import type { ReactNode } from "react";
import style from "./weather-main.module.css";

interface Props {
  children: ReactNode;
}

export default function WeatherMainLayout({ children }: Props) {
  return (
    <div className={`${style["weather-main"]} p-block-mobile`}>{children}</div>
  );
}
