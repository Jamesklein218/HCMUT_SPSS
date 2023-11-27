import "./Home.css";
import React from 'react';
import {Header, Footer} from "../../Components";
import PrintingLog from "../../Components/PrintingLog/PrintingLog";

const Home = (props) => {
  const { printInfoItems } = props;
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
            {printInfoItems.slice(0, 3).map((printInfo, i) => (
                <PrintingLog
                  key={i}
                  printItems={printInfoItems}
                  printingInfo={printInfo}
                />
              ))}
            
          </div>

        
        </div>  

        <Footer/>
     
    </div>
  );
};

export default Home;
