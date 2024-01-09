import { baseUrl } from "./constants";

export const checkServerResponse = (res) => {
  if (res.ok) {
    Promise.resolve("Promise Resolved");
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getClothingItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(checkServerResponse);
};

export const addNewClothingItem = (item) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${item.token}`,
    },
    body: JSON.stringify({
      name: item.name,
      weather: item.weather,
      imageUrl: item.imageUrl,
    }),
  }).then(checkServerResponse);
};

export const deleteClothingItems = (id, token) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkServerResponse);
};
