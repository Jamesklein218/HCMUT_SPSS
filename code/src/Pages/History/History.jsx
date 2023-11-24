import "./History.css";
import React from 'react';
import {PrintingLog, Header, Footer} from "../../Components";

const History = () => {
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
            <p className="specialWelcome">Lịch sử in</p>
          </div>

          <div className="historyLog">
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
export default History;
