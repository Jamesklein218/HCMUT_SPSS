import "./Home.css";
import React from 'react';
import {Header, Footer} from "../../Components";
import PrintingLog from "../../Components/PrintingLog/PrintingLog";

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
      
      <Header/>
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
                <PrintingLog
                  key={i}
                  fileName={infoItemsFile[i]}
                  date={infoItemsDate[i]}
                  printer={infoItemsPrinter[i]}
                  page={infoItemsPage[i]}
                />
              ))}
            
          </div>

        
        </div>  

        <Footer/>
     
    </div>
  );
};

export default Home;
