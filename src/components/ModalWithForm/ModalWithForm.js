import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <form>
        <div className="modal__content">
          <button
            type="button"
            onClick={onClose}
            className="modal__close-button"
          />
          <h3 className="modal__title">{title}</h3>
          <form>{children}</form>
          <button type="submit" className="modal__submit-button">
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalWithForm;
