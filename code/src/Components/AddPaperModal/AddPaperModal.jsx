
import { useRef } from "react";
import "./AddPaperModal.css";


const AddPaperModel = ({ onConfirm, onClose}) => {
    const inputRef = useRef(1);
    return (
      <div>
        <div className="overlay"></div>
        <div className="modal open">
          <h2 className="cancel">Mua thêm giấy</h2>
          <div className="confirm"><input ref={inputRef} type="number" name="" id="" min={1} className="pageBtn"/></div>
          <div className="Btn">
          <button className="confirmBtn" onClick={() => onConfirm(inputRef.current.value)}>Đồng ý</button>
          <button className="cancelBtn" onClick={onClose}>Hủy bỏ</button>
          </div>
        </div>
      </div>
      
    );
  };

export default AddPaperModel;