import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemModal = ({ selectedCard, onClose, handleDeleteButton }) => {
  const currentUser = useContext(CurrentUserContext);

  const isOwner = selectedCard.owner === currentUser._id;

  const itemDeleteButtonClassName = ` ${
    isOwner ? "modal__delete-button_visible" : "modal__delete-button_hidden"
  }`;

  return (
    <div className={`modal`}>
      <div className="modal__container-image">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button-white"
        />
        <img
          className="modal__image-preview"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__item-name">{selectedCard.name}</div>
        <div className="modal__weather-type">
          Weather type: {selectedCard.weather}
        </div>
        <button
          type="button"
          className={itemDeleteButtonClassName}
          onClick={handleDeleteButton}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
