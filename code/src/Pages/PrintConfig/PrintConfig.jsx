import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./PrintConfig.css";

const PrintConfig = () => {
  const location = useLocation();
  const { files } = location.state || {};
  console.log("Files in PrintConfig:", files);

  // Function to get general information content
  const getGeneralInfo = (file) => {
    if (!file) return "No file information available";
    return (
      <>
        <div>File Format: {file.type}</div>
        <div>File Name: {file.name}</div>
        <div>File Size: {file.size} bytes</div>
      </>
    );
  };

  // Placeholder content for the second column (printing configuration)
  const [printingConfig, setPrintingConfig] = useState([
    { type: "size", value: "" },
    { type: "number", value: "" },
    { type: "range", value: "" },
    { type: "paper", value: "" },
  ]);

  const handleConfigChange = (index, value, type) => {
    const updatedConfig = [...printingConfig];
    updatedConfig[index] = { type, value };
    setPrintingConfig(updatedConfig);
  };

  // Placeholder content for the second column (printing configuration)
  const printingConfigItems = [
    { label: "General Information", content: files && getGeneralInfo(files[0]) },
    { label: "Printing Configuration", content: printingConfig },
    { label: "Choose Printer", content: "Dummy content" },
    { label: "Number of Paper", content: "4" },
  ];

  return (
    <div className="print-config">
      <Link to="/Print">
        <div className="back-button">
          <img src="./Images/backarrow.png" alt="Back Icon" />
        </div>
      </Link>
      <div className="print-header">
        <h1>Tạo bản in mới</h1>
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
                              <option value="1-side">1</option>
                              <option value="2-side">2</option>
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
                ) : (
                <p>{item.content}</p>
              )}
            </div>
          ))}
          {/* Placeholder for buttons at the bottom */}
          <div className="button-container">
            <button>Button 1</button>
            <button>Button 2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintConfig;
