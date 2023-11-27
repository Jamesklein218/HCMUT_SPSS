import "./PrintingLog.css";
import React, { useState } from 'react';
import Modal from "../Modal/Modal";
const PrintingLog = (props) => {
    const { printingInfo, updatePrintInfoItems, printItems} = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    let statusClassName;

    if (printingInfo.printStatus === "Đang chờ") {
      statusClassName = "waiting";
    } else if (printingInfo.printStatus === "Đã hủy") {
      statusClassName = "canceled";
    } else {
      statusClassName = "success";
    }
    const handleButtonClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const handleConfirmModal = () => {
      const newArray = printItems.filter(item => item !== printingInfo);
      updatePrintInfoItems(newArray);
      setIsModalOpen(false);
    }

    return(
      <div className="printInfo">
        <div className="infoSide">
          <p className="name">
            {printingInfo.file}
          </p>
          <div className="infoItemList">
            <div className="infoItem">
              <img src="./Images/clock.png" alt="Clock"/>
              <p>{printingInfo.date}</p>
            </div>
  
            <div className="infoItem">
            <img src="./Images/printer.png" alt="Printer"/>
              <p>{printingInfo.printer}</p>
            </div>
  
            <div className="infoItem">
            <img src="./Images/page.png" alt="Page"/>
              <p>{printingInfo.page}</p>
            </div>
          </div>
  
          <div className={`${statusClassName}`}>
            <p>{printingInfo.printStatus}</p>
          </div>
  
        </div>
  
        <button className={`bin ${statusClassName}`} onClick={handleButtonClick}>
          <img style={{ width: '30px', height: 'auto' }} src="./Images/bin.png" alt="bin" />
        </button>
  
        {isModalOpen && 
        <Modal onConfirm={handleConfirmModal} onClose={handleCloseModal} 
        modalTitle={`Xác nhận huỷ đăng ký`} modalMessage={`Khi bấm "Đồng ý", bạn sẽ huỷ bỏ yêu cầu in của mình.`}/>}
        
        
      </div>
    )
  };

export default PrintingLog;