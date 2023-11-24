// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Home, BuyPaper, History, Print, Profile, Login } from "./Pages";
import "./App.css";
import { useEffect, useState } from "react";
import { NavBar } from "./Components";

const MaybeShowNavbar = ({children}) => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname === '/Login' || location.pathname === '/Print') {
      setShowNavbar(false);
    }
    else {
      setShowNavbar(true);
    }
  }, [location])

  return (
    <div>{showNavbar && children}</div>
  )
}

function App() {
  // const [count, setCount] = useState(0);
 
  const printInfoItems = [
    { file: "1233.pdf", date: "27/10/2023", printer: "B4-105", page: "24 trang", printStatus: "Đang chờ" },
    { file: "1234.pdf", date: "26/10/2023", printer: "C4-103", page: "20 trang", printStatus: "Đang chờ" },
    { file: "1235.pdf", date: "12/10/2023", printer: "B1-205", page: "14 trang", printStatus: "Đang chờ" },
    { file: "1236.pdf", date: "05/10/2023", printer: "B1-205", page: "11 trang", printStatus: "Đã hủy" },
    { file: "1237.pdf", date: "17/09/2023", printer: "C4-103", page: "15 trang", printStatus: "Thành công" },
    { file: "1238.pdf", date: "10/09/2023", printer: "B4-105", page: "16 trang", printStatus: "Thành công" },
  ];

  return (
    <Router>
      <div className="App">
        <MaybeShowNavbar>
          <NavBar/>
        </MaybeShowNavbar>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home printInfoItems={printInfoItems}/>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/BuyPaper" element={<BuyPaper />} />
            <Route path="/History" element={<History printInfoItems={printInfoItems}/>} />
            <Route path="/Print" element={<Print />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
