import { GameData } from "./types/GameData";
import { ResponseError } from "./types/ResponseError";

const API_URL = "https://steam2.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Key": "7d1a667073mshb6faaa795b98194p11e733jsnd616fe168731",
  "X-RapidAPI-Host": "steam2.p.rapidapi.com",
};

export async function getGames(
  query: string
): Promise<GameData | ResponseError> {
  return await fetch(`${API_URL}/search/${query}/page/1`, {
    headers,
  })
    .then(async (res) => {
      return await res.json();
    })
    .catch(() => ({
      Response: "False",
      Error: "unexpected error",
    }));
}

export async function getGameDetails(
  id: string
): Promise<GameData | ResponseError> {
  return await fetch(`${API_URL}/appDetail/${id}`, {
    headers,
  })
    .then(async (res) => {
      return await res.json();
    })
    .catch(() => ({
      Response: "False",
      Error: "unexpected error",
    }));
}
