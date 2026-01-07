export async function getApproximateUserLocation(): Promise<{
  country: string;
  city: string;
} | null> {
  try {
    const res = await fetch("https://free.freeipapi.com/api/json");
    const { countryName, cityName } = await res.json();

    return { country: countryName, city: cityName };
  } catch (error) {
    return null;
  }
}
