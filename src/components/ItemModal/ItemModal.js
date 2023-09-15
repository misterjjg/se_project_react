const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button type="button" onClick={onClose}>
          close
        </button>
        <img src={selectedCard.link} alt="selected card" />
        <div>{selectedCard.name}</div>
        <div>Weather type: {selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ItemModal;
