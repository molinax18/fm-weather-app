import WeatherMainLayout from "@/layout/weather-main";
import Header from "@/sections/header/header";
import Hero from "./sections/hero/hero";

export default function App() {
  return (
    <WeatherMainLayout>
      <Header />
      <Hero />
    </WeatherMainLayout>
  );
}
