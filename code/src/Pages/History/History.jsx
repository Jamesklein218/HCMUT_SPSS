import "./History.css";
import React from 'react';
import {PrintingLog, Header, Footer} from "../../Components";

const History = (props) => {
  const { page, updatePage, printInfoItems, updatePrintInfoItems, printTimes, updatePrintTimes} = props;
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
                  printItems={printInfoItems}
                  printTimes={printTimes}
                  numberOfPages={page}
                  updatePage={updatePage}
                  updatePrintTimes={updatePrintTimes}
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
export default History;
