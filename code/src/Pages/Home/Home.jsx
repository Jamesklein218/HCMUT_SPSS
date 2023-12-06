import "./Home.css";
import React from 'react';
import {Header, Footer} from "../../Components";
import PrintingLog from "../../Components/PrintingLog/PrintingLog";

const Home = (props) => {
  const { numberOfPages } = props;
  const { printInfoItems } = props;
  const { updatePrintInfoItems } = props; 
  const pendingPrints = printInfoItems.filter(item => item.printStatus === "Đang chờ");
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
                <p className="value">{numberOfPages}</p>
                <p className="description">Số giấy còn lại</p>
              </div>
            </div>
            
          </div>

          <div className="waitingLog">
            <p className="waitP">Đang chờ</p>
            
            {pendingPrints.slice(0, 3).map((printInfo, i) => (
                <PrintingLog
                  key={i}
                  printItems={printInfoItems}
                  printingInfo={printInfo}
                  updatePrintInfoItems={updatePrintInfoItems}
                />
              ))}
            
          </div>

        
        </div>  

        <Footer/>
     
    </div>
  );
};

export default Home;
