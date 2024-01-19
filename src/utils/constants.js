export const weatherOptions = [
  {
    url: require("../images/day/Sun.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../images/day/Cloud.svg").default,
    day: true,
    type: "clouds",
  },
  {
    url: require("../images/day/Fog.svg").default,
    day: true,
    type: "mist",
  },
  {
    url: require("../images/day/Rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("../images/day/Snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../images/day/Storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("../images/night/Raining.svg").default,
    day: false,
    type: "haze",
  },
  {
    url: require("../images/night/Clear.svg").default,
    day: false,
    type: "clear",
  },
  {
    url: require("../images/night/Cloudy.svg").default,
    day: false,
    type: "clouds",
  },
  {
    url: require("../images/night/Foggy.svg").default,
    day: false,
    type: "mist",
  },
  {
    url: require("../images/night/Moon.svg").default,
    day: false,
    type: "night",
  },
  {
    url: require("../images/night/Raining.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../images/night/Snowy.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../images/night/Stormy.svg").default,
    day: false,
    type: "storm",
  },
  {
    url: require("../images/night/Raining.svg").default,
    day: false,
    type: "haze",
  },
];

// --- CLOTHING API --- //
export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwrjg.crabdance.com"
    : "http://localhost:3001";

export const headers = {
  authorization: "",
  "Content-Type": "application/json",
};
