import axios from "axios";

import AppConfig from "../config";

export async function getApi() {
  const result = await axios.get(
    `${AppConfig.exampleUrl}/aaapi.cgi?t=loadvideo&q=60029591`,
    {
      headers: {
        "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
        "x-rapidapi-key": "cc4f46d91fmsh8f47e0651d9054fp190417jsn662cae3ae1d1",
      },
    }
  );

  if (result.status === 200) return result.data;
  return null;
}
