import "./History.css";
import React from 'react';
import {PrintingLog, Header, Footer} from "../../Components";

const History = (props) => {
  const { printInfoItems } = props;
  return (
    <div className="home">
      <Header/>
        
        <div className="contentSection">
          <div className="welcome">
            <p className="specialWelcome">Lịch sử in</p>
          </div>

          <div className="historyLog">
            {printInfoItems.map((printInfo, i) => (
                <PrintingLog
                  key={i}
                  fileName={printInfo.file}
                  date={printInfo.date}
                  printer={printInfo.printer}
                  page={printInfo.page}
                  printStatus={printInfo.printStatus}
                />
              ))}
            
          </div>

        
        </div>  

        <Footer/>
      
    </div>
  );
};
export default History;
