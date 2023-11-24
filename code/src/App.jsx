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

  return (
    <Router>
      <div className="App">
        <MaybeShowNavbar>
          <NavBar/>
        </MaybeShowNavbar>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/BuyPaper" element={<BuyPaper />} />
            <Route path="/History" element={<History />} />
            <Route path="/Print" element={<Print />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
