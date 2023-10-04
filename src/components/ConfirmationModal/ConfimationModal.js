import "./ConfirmationModal.css";

const ConfirmationModal = ({
  selectedCard,
  onCloseModal,
  onDeleteItem,
  buttonText,
}) => {
  const handleDeleteItemSubmit = () => {
    onDeleteItem(selectedCard._id);
  };
  return (
    <div className={`modal`}>
      <div className="modal__confirm-container">
        <button
          className="modal__confrim-close-button"
          type="button"
          onClick={onCloseModal}
        />
        <div className="modal__confirm-text-wrapper">
          <p className="modal__confirm-text">
            Are you sure you want to delete this item? This action is
            irreversable.
          </p>
        </div>
        <button
          className="modal__confirm-delete-button"
          type="button"
          onClick={handleDeleteItemSubmit}
        >
          {buttonText}
        </button>
        <button
          className="modal__confirm-cancel-button"
          type="button"
          onClick={onCloseModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
