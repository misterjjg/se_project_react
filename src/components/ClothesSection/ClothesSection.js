import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ClothesSection = ({
  clothingItems,
  onSelectCard,
  onCreateModal,
  onCardLike,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const ownedItems = clothingItems.filter((item) => {
    return item.owner === currentUser._id;
  });

  return (
    <section className="clothes-section">
      <div className="clothes-section__container">
        <h3 className="clothes-section__title">Your Items:</h3>
        <button
          className="clothes-section__button"
          type="button"
          onClick={onCreateModal}
        >
          + Add New Items
        </button>
      </div>
      <ul className="clothes-section__cards">
        {""}
        {ownedItems.map((item) => (
          <ItemCard
            key={item.id || item._id}
            item={item}
            onSelectCard={onSelectCard}
            onCardLike={onCardLike}
          />
        ))}
      </ul>
    </section>
  );
};

export default ClothesSection;
