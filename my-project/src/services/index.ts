import { BASE_URL } from "../constants/constants";

export async function getFunction(
  setIsLoading,
  apiEndpoint,
  setData,
  setError,
  errorCode
) {
  try {
    setIsLoading(true);
    const token = sessionStorage.getItem("token");
    const response = await fetch(BASE_URL + apiEndpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    if (result.status === 0) {
      setData(result.data);
    } else {
      for (let i = 0; i < errorCode.length; i++) {
        if (result.status === errorCode[i]) {
          setError(result.message);
        }
      }
    }
  } catch (error) {
    console.error("ERROR Fetching:", error);
  } finally {
    setIsLoading(false);
  }
}
