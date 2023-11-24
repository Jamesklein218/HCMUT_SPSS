// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, BuyPaper, History, Print, Profile, Login } from "./Pages";
// import Home from "./Pages/Home/Home";
// import BuyPaper from "./Pages/BuyPaper/BuyPaper"
// import History from "./Pages/History/History"
// import Print from "./Pages/Print/Print";
// import Profile from "./Pages/Profile/Profile";
// import Login from "./Pages/Login/Login";
import { NavBar } from "./Components";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <NavBar />
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
