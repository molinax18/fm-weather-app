type Icon =
  | "icon-sunny.webp"
  | "icon-partly-cloudy.webp"
  | "icon-overcast.webp"
  | "icon-fog.webp"
  | "icon-drizzle.webp"
  | "icon-rain.webp"
  | "icon-snow.webp"
  | "icon-storm.webp";

type Description =
  | "Sunny"
  | "Cloudy"
  | "Overcast"
  | "Fog"
  | "Drizzle"
  | "Rain"
  | "Snow"
  | "Thunderstorm";

interface WeatherIcon {
  src: Icon;
  alt: Description;
}

export function getWeatherIconByCode(code: number): WeatherIcon {
  if (code === 0 || code === 1) {
    return { src: "icon-sunny.webp", alt: "Sunny" };
  }

  if (code === 2) {
    return { src: "icon-partly-cloudy.webp", alt: "Cloudy" };
  }

  if (code === 3) {
    return { src: "icon-overcast.webp", alt: "Overcast" };
  }

  if ([45, 48].includes(code)) {
    return { src: "icon-fog.webp", alt: "Fog" };
  }

  if ([51, 53, 55, 56, 57].includes(code)) {
    return { src: "icon-drizzle.webp", alt: "Drizzle" };
  }

  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
    return { src: "icon-rain.webp", alt: "Rain" };
  }

  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return { src: "icon-snow.webp", alt: "Snow" };
  }

  if ([95, 96, 99].includes(code)) {
    return { src: "icon-storm.webp", alt: "Thunderstorm" };
  }

  return { src: "icon-sunny.webp", alt: "Sunny" };
}
