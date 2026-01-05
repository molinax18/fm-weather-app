export async function getApproximateUserLocation(): Promise<{
  city: string | undefined;
}> {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const { data } = await res.json();

    return { city: `${data.city} ${data.country}` };
  } catch (error) {
    return { city: undefined };
  }
}
