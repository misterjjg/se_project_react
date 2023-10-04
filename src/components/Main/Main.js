// import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import "./Main.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, clothingItems, type, day }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || "";

  const weatherType = useMemo(() => {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={day} type={type} weatherTemp={temp} />

      <section className="card__section" id="card-section">
        <div className="card__section-title">
          Today is {temp}° {currentTemperatureUnit}. You may want to wear:
        </div>

        <ul className="card__items">
          {filteredCards.map((item) => (
            <ItemCard item={item} key={item._id} onSelectCard={onSelectCard} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
