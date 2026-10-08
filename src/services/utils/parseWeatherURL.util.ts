import type { WeatherParams } from "../types/params.type";
import { BASE_URL } from "../api.service";

export function parseWeatherURL(params: WeatherParams) {
  const urlObj = new URL(BASE_URL);
  urlObj.searchParams.append("latitude", params.latitude);
  urlObj.searchParams.append("longitude", params.longitude);

  if (params.variables) {
    params.variables.forEach((variable) => {
      if (variable.val) {
        return urlObj.searchParams.append(
          variable.type,
          variable.val.join(","),
        );
      } else {
        urlObj.searchParams.append(variable.type, "");
      }
    });
  }

  return urlObj.toString();
}
