import Button from "./Button";
const Modal = ({ isOpen, onClose, rating }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Thank you for your feedback!</h2>
        <p>You rated us: {rating}</p>
        <Button className="close-btn" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
