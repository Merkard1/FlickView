import { global } from "./global";

export async function searchAPIData(page, type, term) {
  const API_KEY = global.api.apiKey;
  const API_URL = global.api.apiUrl;

  const response = await fetch(
    `${API_URL}search/${type}?api_key=${API_KEY}&language=en-US&query=${term}&page=${page}`
  );

  const data = await response.json();

  return data;
}
