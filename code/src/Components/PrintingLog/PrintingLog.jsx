import "./PrintingLog.css";
import React, { useState } from 'react';
import RemoveModal from "../RemoveModal/RemoveModal";
const PrintingLog = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleButtonClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    return(
      <div className="printInfo">
        <div className="infoSide">
          <p className="name">
            {props.fileName}
          </p>
          <div className="infoItemList">
            <div className="infoItem">
              <img src="./Images/clock.png" alt="Clock"/>
              <p>{props.date}</p>
            </div>
  
            <div className="infoItem">
            <img src="./Images/printer.png" alt="Printer"/>
              <p>{props.printer}</p>
            </div>
  
            <div className="infoItem">
            <img src="./Images/page.png" alt="Page"/>
              <p>{props.page}</p>
            </div>
          </div>
  
          <div className="status">
            <p>Đang chờ</p>
          </div>
  
        </div>
  
        <button className="bin" onClick={handleButtonClick}>
          <img style={{ width: '30px', height: 'auto' }} src="./Images/bin.png" alt="bin" />
        </button>
  
        {isModalOpen && <RemoveModal onClose={handleCloseModal} />}
        
        
      </div>
    )
  };

export default PrintingLog;