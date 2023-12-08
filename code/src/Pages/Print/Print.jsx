import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Print.css";

const Print = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const allowedFormats = ["pdf", "xlsx", "xls", "ppt", "pptx", "doc", "docx", "image", "png", "jpeg", "jpg"];
    // State to manage the error message
    const [errorMessage, setErrorMessage] = useState(null);

  const isFileFormatAllowed = (fileName) => {
    // Extract the file extension from the file name
    const fileExtension = fileName.split(".").pop().toLowerCase();
  
    // Check if the file extension is in the allowed formats array
    return allowedFormats.includes(fileExtension);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log("Dropped files:", files);

    // Filter out files with disallowed formats
    const allowedFiles = Array.from(files).filter((file) =>
      isFileFormatAllowed(file.name)
    );

    if (allowedFiles.length > 0) {
      navigateToPrintConfig(allowedFiles);
    } else {
      setErrorMessage("File không được hỗ trợ!");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    console.log("Selected files:", files);

    // Filter out files with disallowed formats
    const allowedFiles = Array.from(files).filter((file) =>
      isFileFormatAllowed(file.name)
    );

    if (allowedFiles.length > 0) {
      navigateToPrintConfig(allowedFiles);
    } else {
      setErrorMessage("File không được hỗ trợ!");
    }
  };

  const navigateToPrintConfig = (files) => {
    navigate("/PrintConfig", {
      state: { files }, // Pass the selected files as state
    });
  };

  return (
    <div className="print">
      <div className="print-content">
      <div className="page-header">
        <Link to="/Home">
          <div className="back-button">
            <img src="./Images/backarrow.png" alt="Back Icon" />
          </div>
        </Link>
        <div className="print-header">
          <h1>Tạo bản in mới</h1>
        </div>
      </div>
      <div className="page-content">
      <div
        className="file-drop-box"
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
      >
        <img src="./Images/uploadfile.png" alt="Uploadfile" />
        <p>Bạn có thể kéo thả tập tin của bạn vào đây</p>
        <button type="button" onClick={handleBrowseClick}>
          Tải lên
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />
      </div>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Print;
