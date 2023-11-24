import "./RemoveModal.css";

const RemoveModal = ({ onClose }) => {
    return (
      <div>
        <div className="overlay"></div>
        <div className="modal open">
          <h2 className="cancel">Xác nhận hủy đăng ký</h2>
          <p className="confirm">Khi bấm "Đồng ý", bạn sẽ hủy bỏ yêu cầu in của mình.</p>
          <div className="Btn">
          <button className="confirmBtn">Đồng ý</button>
          <button className="cancelBtn" onClick={onClose}>Hủy bỏ</button>
          </div>
        </div>
      </div>
      
    );
  };

export default RemoveModal;