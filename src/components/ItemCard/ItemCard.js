import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card__item">
      <div>
        <img
          src={item.imageUrl}
          alt={item.name}
          className="card__image"
          onClick={() => onSelectCard(item)}
        />
      </div>
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
