import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Print.css";

const Print = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log("Dropped files:", files);
    navigateToPrintConfig(files);
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
    navigateToPrintConfig(files);
  };

  const navigateToPrintConfig = (files) => {
    navigate("/PrintConfig", {
      state: { files }, // Pass the selected files as state
    });
  };

  return (
    <div className="print">
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
  );
};

export default Print;
