import "./Home.css";
import React, { useState } from 'react';
import RemoveModal from "../../Components/RemoveModal/RemoveModal";

const PrintInfo = (props) => {
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

const Home = () => {
  // const [selectedPrintInfoIndex, setSelectedPrintInfoIndex] = useState(null);
  const infoItemsFile = [
    "1233.pdf", "1234.pdf", "1235.pdf"
  ]

  const infoItemsDate = [
    "27/10/2023", "26/10/2023", "12/10/2023"
  ];

  const infoItemsPrinter = [
    "B4-105", "C4-103", "B1-205"
  ]

  const infoItemsPage = [
    "24 trang", "20 trang", "14 trang"
  ]

  return (
    <div className="home">
      <div className="header">

      </div>
      
      <div className="contentSection">
        <div className="welcome">
          <p className="specialWelcome">Chào mừng trở lại, Khoa</p>
          <p className="goodluck">Chúc bạn một ngày tốt lành</p>
        </div>

        <div className="importantView">
          <div className="viewItem">
            <img src="./Images/impPrinter.png" alt="impPrinter" className="viewImg"></img>
            <div className="data">
              <p className="value">12</p>
              <p className="description">Số lần in</p>
            </div>
          </div>

          <div className="viewItem">
            <img src="./Images/file.png" alt="file" className="viewImg"></img>
            <div className="data">
              <p className="value">12</p>
              <p className="description">Số giấy còn lại</p>
            </div>
          </div>
          
        </div>

        <div className="waitingLog">
          <p className="waitP">Đang chờ</p>
          {infoItemsDate.map((date, i) => (
              <PrintInfo
                key={i}
                fileName={infoItemsFile[i]}
                date={infoItemsDate[i]}
                printer={infoItemsPrinter[i]}
                page={infoItemsPage[i]}
              />
            ))}
          
        </div>

       
      </div>  

      <div className="footer">
        <div className="copyright">
          <p>&copy; 2023 HCMUT SSPS</p>
        </div>
        <div className="university">
          <p>VNU, Ho Chi Minh University of Technology</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
