import type { UserLocationResponse } from "./user-location.type";

const baseUrl = "https://free.freeipapi.com/api/json";

export async function getApproximateUserLocation(): Promise<UserLocationResponse | null> {
  const response = await fetch(baseUrl);

  if (!response.ok) {
    throw new Error("We could'nt get the user location.");
  }

  const data = (await response.json()) as UserLocationResponse;
  return data ?? null;
}
