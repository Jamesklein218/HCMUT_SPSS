import "./Login.css";
import { useNavigate  } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/Home");
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
            
            <button className="loginBtn" onClick={handleLoginClick}>
              Đăng nhập HCMUT
            </button>
          </div> 
        </div>
      </div>
    );
  };
  
  export default Login;
  