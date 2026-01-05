import WeatherMainLayout from "@/layout/weather-main";
import WeatherManager from "./features/weather/weather-control/weather-manager";
import Header from "@/sections/header/header";
import Hero from "@/sections/hero/hero";
import Main from "@/sections/main/main";

export default function App() {
  return (
    <WeatherMainLayout>
      <Header />
      <Main>
        <Hero />
        <WeatherManager />
      </Main>
    </WeatherMainLayout>
  );
}
