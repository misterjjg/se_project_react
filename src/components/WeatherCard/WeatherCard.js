import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const imgSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imgSrcUrl = imgSrc[0]?.url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather__info">
        {weatherTemp}°{currentTemperatureUnit}
      </div>
      <img src={imgSrcUrl} className="weather__image" alt="weather bar" />
    </section>
  );
};

export default WeatherCard;
