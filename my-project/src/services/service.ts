import { getFunction } from ".";

export async function getService(setData, setError, setIsLoading) {
  await getFunction(setIsLoading, "/services", setData, setError, [108]);
}
