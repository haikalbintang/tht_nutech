import { getFunction } from ".";
import { BASE_URL } from "../constants/constants";

export async function fetchProfile(setData, setError, setIsLoading) {
  try {
    setIsLoading(true);
    const token = sessionStorage.getItem("token");
    const response = await fetch(BASE_URL + "/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    if (result.status === 0) {
      setData(result.data);
    } else if (result.status === 108) {
      setError(result.message);
    }
  } catch (error) {
    console.error("Fetch Profile error:", error);
  } finally {
    setIsLoading(false);
  }
}

export async function getProfile(setData, setError, setIsLoading) {
  await getFunction(setIsLoading, "/profile", setData, setError, [108]);
}
