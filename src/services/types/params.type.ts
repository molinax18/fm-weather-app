type WeatherType = "current" | "hourly" | "daily";
type VariableType =
  | "temperature_2m"
  | "precipitation"
  | "weather_code"
  | "relative_humidity_2m"
  | "apparent_temperature"
  | "wind_speed_10m"
  | "temperature_2m_min"
  | "temperature_2m_max";

interface Variable {
  type: WeatherType;
  val?: Array<VariableType>;
}

export interface WeatherParams {
  latitude: string;
  longitude: string;
  variables?: Array<Variable>;
}
