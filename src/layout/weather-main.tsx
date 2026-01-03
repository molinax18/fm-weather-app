import type { ReactNode } from "react";
import style from "./weather-main.module.css";

interface Props {
  children: ReactNode;
}

export default function WeatherMainLayout({ children }: Props) {
  return (
    <div className={`p-block-mobile flex-col ${style["weather-main"]}`}>
      {children}
    </div>
  );
}
