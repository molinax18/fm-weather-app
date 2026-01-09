export async function getApproximateUserLocation(): Promise<{
  country: string;
  city: string;
}> {
  const response = await fetch("https://free.freeipapi.com/api/json");

  if (!response.ok) {
    throw new Error("We could'nt get the user location.");
  }

  const { countryName, cityName } = await response.json();
  return { country: countryName, city: cityName };
}
