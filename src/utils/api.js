const baseUrl = "https://localhost:3001";

export const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getClothingItems = (_id) => {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(checkServerResponse);
};

export const addNewClothingItem = (newItem) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: newItem.name,
      weather: newItem.weather,
      imageUrl: newItem.imageUrl,
    }),
  }).then(checkServerResponse);
};

export const deleteClothingItems = (_id) => {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then(checkServerResponse);
};

export const request = (url, options) => {
  return fetch(url, options).then(checkServerResponse);
};
