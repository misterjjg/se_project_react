import "./WeatherCard.css";

const weatherOptions = [
  {
    url: require("./../../images/day/Sun.svg").default,
    day: true,
    type: "sun",
  },
  {
    url: require("./../../images/day/Cloud.svg").default,
    day: true,
    type: "cloud",
  },
  {
    url: require("./../../images/day/Fog.svg").default,
    day: true,
    type: "fog",
  },
  {
    url: require("./../../images/day/Rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("./../../images/day/Snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("./../../images/day/Storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("./../../images/night/Cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("./../../images/night/Foggy.svg").default,
    day: false,
    type: "foggy",
  },
  {
    url: require("./../../images/night/Moon.svg").default,
    day: false,
    type: "moon",
  },
  {
    url: require("./../../images/night/Raining.svg").default,
    day: false,
    type: "raining",
  },
  {
    url: require("./../../images/night/Snowy.svg").default,
    day: false,
    type: "snowy",
  },
  {
    url: require("./../../images/night/Stormy.svg").default,
    day: false,
    type: "stormy",
  },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  console.log("weather card");

  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp} F</div>
      <img src={imageSrcUrl} className="weather_image" alt="sun" />
    </section>
  );
};

export default WeatherCard;
