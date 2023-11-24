import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();

  const getNavItemClass = (pathname) => {
    return location.pathname === pathname ? "navbar-item current-page" : "navbar-item";
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./Images/logo.png" alt="Logo" />
      </div>
      <div className="navbar-content">
        <Link to="/Print" className={getNavItemClass("/Print")} id="mainFunction">
          <img src="./Images/addIcon.png" alt="Add Icon" />
          <p>Tạo bản in</p>
        </Link>

        <Link to="/" className={getNavItemClass("/")}>
          <img src="./Images/home.png" alt="Home Icon" />
          <p>Trang chủ</p>
        </Link>

        <Link to="/BuyPaper" className={getNavItemClass("/BuyPaper")}>
          <img src="./Images/shopping-cart.png" alt="Shopping Cart Icon" />
          <p>Mua giấy</p>
        </Link>

        <Link to="/History" className={getNavItemClass("/History")}>
          <img src="./Images/history.png" alt="History Icon" />
          <p>Lịch sử in</p>
        </Link>

        <Link to="/Profile" className={getNavItemClass("/Profile")}>
          <img src="./Images/profile.png" alt="Profile Icon" />
          <p>Xem hồ sơ</p>
        </Link>
      </div>
      <div className="navbar-logout-section">
        <Link to="/Login" className={getNavItemClass("/Login")} id="logout">
          <img src="./Images/logout.png" alt="Logout Icon" />
          <p>Đăng xuất</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
