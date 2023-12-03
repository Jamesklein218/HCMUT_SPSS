import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {PrintingLog, Footer, Modal } from "../../Components";
import "./PrintConfig.css";

const PrintConfig = (props) => {
  const { updateNumberOfPages, numberOfPages, updatePrintInfoItems, printInfoItems} = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const { files } = location.state || {};
  console.log("Files in PrintConfig:", files);

  // Function to get general information content
  const getGeneralInfo = (file) => {
    if (!file) return "No file information available";
    return (
      <>
        <div className="general-info">
          <div className="general-info-label">
            <div>File Format: </div>
            <div>File Name: </div>
            <div>File Size: </div>
          </div>
          <div className="general-info-content">
            <div>{file.type}</div>
            <div>{file.name}</div>
            <div>{file.size} bytes</div>
          </div>
        </div>
      </>
    );
  };

  const currentDate = new Date();

  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = currentDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  // Placeholder content for the second column (printing configuration)
  const [printingConfig, setPrintingConfig] = useState([
    { type: "size", value: "" },
    { type: "number", value: "" },
    { type: "range", value: "" },
    { type: "paper", value: "" },
    { type: "printer", value: "" }, // Added "printer" type
  ]);

  const handleConfigChange = (index, value, type) => {
    const updatedConfig = [...printingConfig];
    updatedConfig[index] = { type, value };
    setPrintingConfig(updatedConfig);
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmModal = () => {
    const rangeString = printingConfig[2].value;
    const [start, end] = rangeString.split('-').map(value => parseInt(value.trim(), 10));
    const num_page = Math.ceil((end - start + 1) / parseInt(printingConfig[3].value)) * printingConfig[1].value
    const pages_left = numberOfPages.pages - num_page
    if (pages_left >= 0) {
      updateNumberOfPages({pages: pages_left})
    }

    const newitems = { file: files[0].name, date: formattedDate, printer: printingConfig[4].value, page: `${num_page} trang`, printStatus: "Đang chờ" };
    const newArray = [newitems, ...printInfoItems]
    updatePrintInfoItems(newArray);
    setIsModalOpen(false);
  }

  // Placeholder content for the second column (printing configuration)
  const printingConfigItems = [
    { label: "General Information", content: files && getGeneralInfo(files[0]) },
    { label: "Printing Configuration", content: printingConfig.slice(0, 4) },
    { label: "Choose Printer", content: printingConfig[4].type },
    { label: "Number of Paper", content: numberOfPages.pages },
  ];

  return (
    <div className="print-config">
      <div className="content-section">
        <div className="config-header">
          <Link to="/Print">
            <div className="back-button">
              <img src="./Images/backarrow.png" alt="Back Icon" />
            </div>
          </Link>
          <div className="print-header">
            <h1>Tạo bản in mới</h1>
          </div>
        </div>
        <div className="printconfig-content">
          {/* First Column */}
          <div className="first-column">
            {files && files.length > 0 && (
              <img src={URL.createObjectURL(files[0])} alt="File Preview" />
            )}
          </div>
          {/* Second Column */}
          <div className="second-column">
            {printingConfigItems.map((item, index) => (
              <div key={index} className="config-item">
                <h3>{item.label}</h3>
                {/* Render the content based on the label */}
                {item.label === "General Information" ? (
                  <div className="general-info">{item.content}</div>
                  ) : item.label === "Printing Configuration" ? (
                    <div className="config-content">
                      {item.content.map((entry, entryIndex) => (
                        <div key={entryIndex} className="config-entry">
                        <label>{entry.type === "size" ? "Cỡ giấy:" : entry.type === "number" ? "Số lượng:" : entry.type === "range" ? "Số trang:" : entry.type === "paper" ? "Số mặt:" : "Số trang:"}</label>
                        {entry.type === "number" ? (
                          <input
                            type="number"
                            value={entry.value}
                            onChange={(e) => handleConfigChange(entryIndex, e.target.value, "number")}
                          />
                        ) : entry.type === "range" ? (
                          <input
                            type="text"
                            value={entry.value}
                            onChange={(e) => handleConfigChange(entryIndex, e.target.value, "range")}
                          />
                        ) : entry.type === "size" || entry.type === "paper" ? (
                          <select
                            value={entry.value}
                            onChange={(e) => handleConfigChange(entryIndex, e.target.value, entry.type)}
                          >
                            {/* <option value="">{entry.type === "size" ? "Chọn cỡ giấy" : "Chọn số mặt"}</option> */}
                            {entry.type === "size" ? (
                              <>
                                <option value="A4">A4</option>
                                <option value="A3">A3</option>
                              </>
                            ) : (
                              <>
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </>
                            )}
                          </select>
                            ) : (
                              <input
                                type="text"
                                value={entry.value}
                                onChange={(e) => handleConfigChange(entryIndex, e.target.value, "text")}
                              />
                          )}
                        </div>
                      ))}
                    </div>
                  ) : item.label === "Choose Printer" ? (
                    <div className="config-content">
                      <div className="config-entry">
                        <label>Choose Printer:</label>
                        <select
                          value={item.content}
                          onChange={(e) => handleConfigChange(4, e.target.value, "printer")}
                        >
                          <option value="">ABCXYZ</option>
                          <option value="printer2">Printer 2</option>
                          {/* Add more printer options as needed */}
                        </select>
                      </div>
                    </div>
                  )  : item.label === "Number of Paper" ? (
                    <div className="config-content">
                      <div className="config-entry">
                        <label>Giấy còn lại:</label>
                        <p>{item.content}</p>
                        <div className="buypaper-button">
                          <Link to="/BuyPaper">
                            <button>Buy Paper</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                  <p>{item.content}</p>
                )}
              </div>
            ))}
            {/* Placeholder for buttons at the bottom */}
            <div className="button-container">
              <button className= "check-button" onClick={handleButtonClick}>
                <img style={{ width: '15px', height: 'auto' }} src="./Images/checkmark.png" alt="check" />
                <p>Đăng ký</p>
              </button>
              
  
              {isModalOpen && 
              <Modal onConfirm={handleConfirmModal} onClose={handleCloseModal} 
              modalTitle={`Xác nhận`} modalMessage={`Khi bấm “Đồng ý" hệ thống sẽ tự động in và trừ số giấy trong tài khoản của bạn.`}/>}
        
              <Link to="/Print">
                <div className="bin-button">
                  <img src="./Images/bin.png" alt="Bin Icon" />
                  <p>Bỏ tệp</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="historyLog">
              {printInfoItems.map((printInfo, i) => (
                  <PrintingLog
                    key={i}
                    printingInfo={printInfo}
                    printItems={printInfoItems}
                    updatePrintInfoItems={updatePrintInfoItems}
                    />
                ))}
              
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PrintConfig;
