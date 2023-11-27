import "./Modal.css";

const Modal = ({ onConfirm, onClose, modalTitle, modalMessage }) => {
    return (
      <div>
        <div className="overlay"></div>
        <div className="modal open">
          <h2 className="cancel">{modalTitle}</h2>
          <p className="confirm">{modalMessage}</p>
          <div className="Btn">
          <button className="confirmBtn" onClick={onConfirm}>Đồng ý</button>
          <button className="cancelBtn" onClick={onClose}>Hủy bỏ</button>
          </div>
        </div>
      </div>
      
    );
  };

export default Modal;