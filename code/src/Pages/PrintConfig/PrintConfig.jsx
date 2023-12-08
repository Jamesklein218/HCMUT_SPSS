import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Footer, Modal } from "../../Components";
import { FileViewer } from  "../../Components";
import "./PrintConfig.css";

const PrintConfig = (props) => {
  const { updateNumberOfPages, numberOfPages, updatePrintInfoItems, printInfoItems, printTimes, updatePrintTimes} = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { files } = location.state || {};

// Function to get general information content
  const getGeneralInfo = (file) => {
    if (!file) return "No file information available";

    const fileSizeKB = (file.size / 1024).toFixed(2);
    return (
      <>
        <div className="general-info">
          <div className="general-info-label">
            <div>Định dạng: </div>
            <div>Tên tập tin: </div>
            <div>Kích thước: </div>
          </div>
          <div className="general-info-content">
            <div>{file.type}</div>
            <div>{file.name}</div>
            <div>{fileSizeKB} KB</div>
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
    { type: "size", value: "A4" },
    { type: "number", value: "1" },
    { type: "range", value: "1 - 1" },
    { type: "paper", value: "1" },
    { type: "printer", value: "B4-105" }
  ]);

  const rangeString = printingConfig[2].value;
  const [start, end] = rangeString.split('-').map(value => parseInt(value.trim(), 10));
  const num_page = Math.ceil((end - start + 1) / parseInt(printingConfig[3].value)) * printingConfig[1].value

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
    const pages_left = numberOfPages - num_page
    if (pages_left >= 0) {
      updateNumberOfPages(pages_left)
      updatePrintTimes(printTimes+1)
      const newitems = { file: files[0].name, date: formattedDate, printer: printingConfig[4].value, page: `${num_page} trang`, printStatus: "Đang chờ" };
      const newArray = [newitems, ...printInfoItems]
      updatePrintInfoItems(newArray);
    }

    setIsModalOpen(false);
    navigate("/History");
  }

  // Placeholder content for the second column (printing configuration)
  const printingConfigItems = [
    { label: "Thông tin chung", content: files && getGeneralInfo(files[0]) },
    { label: "Tùy chọn in ấn", content: printingConfig.slice(0, 4) },
    { label: "Máy in", content: printingConfig[4] },
    { label: "Số giấy", content: numberOfPages },
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
            <div className="PDF-viewer">
              <FileViewer document={URL.createObjectURL(files[0])} />
            </div>
          )}
          </div>
          {/* Second Column */}
          <div className="second-column">
            {printingConfigItems.map((item, index) => (
              <div key={index} className="config-item">
                <h3>{item.label}</h3>
                {/* Render the content based on the label */}
                {item.label === "Thông tin chung" ? (
                  <div className="general-info">{item.content}</div>
                  ) : item.label === "Tùy chọn in ấn" ? (
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
                  ) : item.label === "Máy in" ? (
                    <div className="config-content">
                      <div className="config-entry">
                        <label>Mã máy in:</label>
                        <select
                          value={item.content.value}
                          onChange={(e) => handleConfigChange(4, e.target.value, "printer")}
                        >
                          <option value="B4-105">Máy in B4-105</option>
                          <option value="A4-401">Máy in A4-401</option>
                          <option value="C6-105">Máy in C6-105</option>
                        </select>
                      </div>
                    </div>
                  )  : item.label === "Số giấy" ? (
                    <div className="config-content">
                      <div className="config-entry">
                        <label>Giấy còn lại:</label>
                        <p>{item.content}</p>
                        <div className="buypaper-button">
                          <Link to="/BuyPaper">
                            <p style={{fontSize: 14}}>Thêm giấy</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                  <p>{item.content}</p>
                )}
              </div>
            ))}
              <div>
                {(num_page > numberOfPages) ? (
                  <div className="msg">
                    {/* Content to display when the condition is true */}
                    <p>Lỗi: Không đủ giấy để in!</p>
                  </div>
                ) : (
                  <div>
                    {/* Content to display when the condition is false */}
                  </div>
                )}
              </div>
            {/* Placeholder for buttons at the bottom */}
            <div className="button-container">
              <button 
              className= "check-button" 
              onClick={handleButtonClick} 
              disabled={num_page > numberOfPages}
              >
                <img style={{ width: '15px', height: 'auto' }} src="./Images/checkmark.png" alt="check" />
                <p>Đăng ký</p>
              </button>
              
  
              {isModalOpen && 
              <Modal onConfirm={handleConfirmModal} onClose={handleCloseModal} 
              modalTitle={`Xác nhận`} modalMessage={`Khi bấm "Đồng ý" hệ thống sẽ tự động in và trừ số giấy trong tài khoản của bạn.`}/>}
        
              <Link to="/Print">
                <div className="bin-button">
                  <img src="./Images/bin.png" alt="Bin Icon" />
                  <p style={{fontSize: 14}}>Bỏ tệp</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PrintConfig;
