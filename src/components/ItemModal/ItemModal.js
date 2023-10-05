import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, handleDeleteButton }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button
          type="button"
          onClick={onClose}
          className="modal__item-close-button"
        />
        <img
          className="modal__item-image"
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <div className="modal__footer">
          <p className="modal__item-name">{selectedCard.name}</p>
          <div className="modal__weather-type">
            Weather type: {selectedCard.weather}
          </div>
          <button
            type="button"
            className="modal__delete-button"
            onClick={handleDeleteButton}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
