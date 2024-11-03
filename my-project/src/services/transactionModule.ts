import { fetchFunction } from "./profile";

export async function fetchBalance(setData, setError, setIsLoading) {
  await fetchFunction(setIsLoading, "/balance", setData, setError, [108]);
}
