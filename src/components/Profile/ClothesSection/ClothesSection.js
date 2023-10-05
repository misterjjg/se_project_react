import "./ClothesSection.css";
import ItemCard from "../../ItemCard/ItemCard";

const ClothesSection = ({ clothingItems, onSelectCard, onCreateModal }) => {
  return (
    <section className="clothes-section">
      <div className="clothes-section__container">
        <h3 className="clothes-section__title">Your Items</h3>
        <button
          className="clothes-section__button"
          type="button"
          onClick={onCreateModal}
        >
          + Add New
        </button>
      </div>
      <ul className="clothes-section__cards">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
        ))}
      </ul>
    </section>
  );
};

export default ClothesSection;
