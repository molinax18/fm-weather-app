import { useGlobalContext } from "./context/global/open-meteo/global.context";
import { RetryIcon } from "./shared/components/svg";
import WeatherMainLayout from "@/layout/weather-main";
import WeatherManager from "./features/weather/components/weather-control/weather-manager";
import Header from "@/sections/header/header";
import Hero from "@/sections/hero/hero";
import Main from "@/sections/main/main";
import Button from "./shared/components/button/button";
import ErrorMessage from "./shared/components/states/error-message";

export default function App() {
  const { error, refetch } = useGlobalContext();

  return (
    <WeatherMainLayout>
      <Header />
      <Main>
        {error ? (
          <ErrorMessage message={(error as Error).message}>
            <Button onClick={refetch}>
              <RetryIcon /> Retry
            </Button>
          </ErrorMessage>
        ) : (
          <>
            <Hero />
            <WeatherManager />
          </>
        )}
      </Main>
    </WeatherMainLayout>
  );
}
