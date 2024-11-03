import { getFunction } from ".";

export async function getBalance(setData, setError, setIsLoading) {
  await getFunction(setIsLoading, "/balance", setData, setError, [108]);
}
