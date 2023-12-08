import "./Login.css";
import { useNavigate  } from "react-router-dom";
import React, { useState } from 'react';

const Login = ({users}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    const user = users.find((user) => user.username === username);
    
    if (user) {
      if (user.password === password) {
        navigate("/Home");
      } else {
        alert('Incorrect password');
      }
    } else {
      alert('Username not found');
    }
  };

    return (
      <div className="login">
        <div className="leftBackground">
          
        </div>

        <div className="rightLogin">
          <div className="logo">
            <img src="./Images/logo.png" alt="Logo" />
          </div>
          <div className="welcomeLogin">
            <img src="./Images/loginImage.png" alt="lImage"></img>
            <p className="specialWelcome">Chào mừng</p>
            <p className="description">Hệ thống in ấn thông minh trong khuôn viên trường đại học Bách Khoa.</p>
          </div>

          <div className="loginContent">
            <div className="usernameLogin loginInput">
              <p>Tên đăng nhập</p>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            
            <br/>
            
            <div className="usernameLogin loginInput">
              <p>Mật khẩu</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <br/>
            <button className="loginBtn" onClick={handleLoginClick}>
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  