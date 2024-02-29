import { TfiClose } from "react-icons/tfi";
import './Modal.css';

const Modal = ({ children, shouldShowModal, onRequestClose }) => {

  return (
    <>
      {shouldShowModal && (
        <div className="modal-bg" onClick={onRequestClose}>
          <div className="modal-body" onClick={(e) => e.stopPropagation()}>
            <TfiClose className="close-btn" onClick={onRequestClose} />
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal;
