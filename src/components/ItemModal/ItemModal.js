import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemModal = ({ selectedCard, onClose, handleDeleteButton }) => {
  const currentUser = useContext(CurrentUserContext);

  const isOwner = selectedCard.owner === currentUser._id;

  const itemDeleteButtonClassName = ` ${
    isOwner ? "modal__delete-button_visible" : "modal__delete-button_hidden"
  }`;

  // const handleDeleteItemSubmit = () => {
  //   onDeleteItem(selectedCard._id, token);
  // };

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
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__footer">
          <p className="modal__item-name">{selectedCard.name}</p>
          <div className="modal__weather-type">
            Weather type: {selectedCard.weather}
          </div>
          <button
            type="button"
            // className="modal__delete-button"
            className={itemDeleteButtonClassName}
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
