import WeatherMainLayout from "@/layout/weather-main";
import Header from "@/sections/header/header";
import Hero from "@/sections/hero/hero";
import Main from "@/sections/main/main";

export default function App() {
  return (
    <WeatherMainLayout>
      <Header />
      <Main>
        <Hero />
      </Main>
    </WeatherMainLayout>
  );
}
