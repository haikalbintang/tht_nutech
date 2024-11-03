import { getFunction } from ".";

export async function getBanner(setData, setError, setIsLoading) {
  await getFunction(setIsLoading, "/banner", setData, setError, [108]);
}
