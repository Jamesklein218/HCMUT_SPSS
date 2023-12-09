import "./Profile.css";
import {Header, Footer} from "../../Components";
import React, { useState } from 'react';

const Profile = (props) => {
  const { waiting, page, printTimes, image, handleImageChange } = props; 
    return (
      <div className="profileInfo">
        <Header/>
        <div className="contentSection">
          <div className="welcome">
            <p className="specialWelcome">Hồ sơ của bạn</p>
          </div>
          <div className="profile">
            <div className="inputImage">
              <img src={image || "./Images/portrait.png"} alt="portrait" className="avatar" />
                <div className="upload">
                  <label htmlFor="uploadInput" className="inputItem" id="main">
                    <p>Tải lên</p>
                  </label>
                  <input
                    type="file"
                    id="uploadInput"
                    accept=".png, .jpeg, .jpg"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                  <p className="require">Tệp tin tối đa 1MB. Hệ thống chỉ nhận PNG, JPEG và JPG</p>
                </div>            
            </div>
            <div className="info">
              <div className="accountProp">
                <p>Tên</p>
                <input type="text" disabled="disabled" value="Khang" className="disableInput"/>
                <p>Email</p>
                <input type="text" disabled="disabled" value="test@hcmut.edu.vn" className="disableInput"/>
                <p>Password</p>
                <input type="password" disabled="disabled" value="123456" className="disableInput"/>
              </div>
              <div className="printProp">
                <div className="printPropItem">
                  <p className="title">Số lần in</p>
                  <div>
                    <p className="number">{printTimes}</p>
                    <p className="unit">lần</p>
                  </div>
                </div>
                <div className="printPropItem">
                  <p className="title">Số giấy còn lại</p>
                  <div>
                    <p className="number">{page}</p>
                    <p className="unit">tờ</p>
                  </div>
                </div>
                <div className="printPropItem">
                  <p className="title">Yêu cầu đang chờ</p>
                  <div>
                    <p className="number">{waiting}</p>
                    <p className="unit">yêu cầu</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <Footer/>
      </div>
    );
  };
  
  export default Profile;
  