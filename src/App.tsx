import { useWeather } from "./services/hooks/useWeather";

export default function App() {
  const { data, error, isLoading } = useWeather({
    latitude: "-33.2914",
    longitude: "-66.3247",
  });

  return (
    <div>
      <h1>Weather</h1>

      {isLoading && <span>Loading...</span>}
      {data && "error" in data ? (
        <span>Invalid request. Please send a valid input</span>
      ) : (
        <span>{JSON.stringify(data)}</span>
      )}
      {error && <span>Something went wrong</span>}
    </div>
  );
}
