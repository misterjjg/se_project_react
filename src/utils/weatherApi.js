import { request } from "./api";

const latitude = 37.97;
const longitude = 122.03;
const APIkey = "92772b744661af8b829e8e81a90fb2fe";

export const getForecastWeather = () => {
  const weatherApi = request(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((data.main.temp - 32) * 5) / 9),
    },
  };
  console.log(weather);
  return weather;
};

export const parseLocationData = (data) => {
  const userLocation = data.name;
  return userLocation;
};

export const parseForecastData = (data) => {
  const weather = data.weather;
  const forcast = weather && weather[0].main.toLowerCase();
  return forcast;
};

export const parseTimeOfDay = (data) => {
  const currentTime = Date.now();
  const timeOfDay = data.sys;
  const sunrise = timeOfDay.sunrise;
  const sunset = timeOfDay.sunset;

  if (currentTime > sunrise && currentTime < sunset) {
    return true;
  } else {
    return false;
  }
};
