import "./Login.css";
import { useNavigate  } from "react-router-dom";
import React, { useState } from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Login = ({users}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLoginClick = () => {
    const user = users.find((user) => user.username === username);
    
    if (user) {
      if (user.password === password) {
        navigate("/Home");
      } else {
        setErrorMsg('Wrong password');
      }
    } else {
      setErrorMsg('User not found');
    }
  };

    return (
      <div className="login">
        <div className="leftBackground">
          
        </div>

        <div className="rightLogin">
          <div className="logo">
            <Logo width={160} />
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

            <p className="errorMsg">{errorMsg}</p>

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
  