// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Home, BuyPaper, History, Print, Profile, Login, PrintConfig } from "./Pages";
import "./App.css";
import { useEffect, useState } from "react";
import { NavBar } from "./Components";

const MaybeShowNavbar = ({children}) => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/Print' || location.pathname === '/PrintConfig') {
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
  const [page, setPage] = useState (123);
  
  const [printTimes, setPrintTimes] = useState(6);

  const [printInfoItems, setPrintInfoItems] = useState([ { file: "1233.pdf", date: "27/10/2023", printer: "B4-105", page: "24 trang", printStatus: "Đang chờ" },
  { file: "1234.pdf", date: "26/10/2023", printer: "C4-103", page: "20 trang", printStatus: "Đang chờ" },
  { file: "1235.pdf", date: "12/10/2023", printer: "B1-205", page: "14 trang", printStatus: "Đang chờ" },
  { file: "1236.pdf", date: "05/10/2023", printer: "B1-205", page: "11 trang", printStatus: "Đã hủy" },
  { file: "1237.pdf", date: "17/09/2023", printer: "C4-103", page: "15 trang", printStatus: "Thành công" },
  { file: "1238.pdf", date: "10/09/2023", printer: "B4-105", page: "16 trang", printStatus: "Thành công" },]);

  const [paperHistoryItems, setPaperHistoryItems] = useState([ { quantity: 90, cost:"90.000 VND", buyStatus: "Đang thanh toán", time: "13:00, 14/05/2023" },
  { quantity: 12, cost:"12.000 VND", buyStatus: "Đã thanh toán", time: "13:00, 14/05/2023" },
  { quantity: 12, cost:"12.000 VND", buyStatus: "Đã thanh toán", time: "13:00, 14/05/2023" },
  { quantity: 12, cost:"12.000 VND", buyStatus: "Đã thanh toán", time: "13:00, 14/05/2023" },
  { quantity: 12, cost:"12.000 VND", buyStatus: "Đã thanh toán", time: "13:00, 14/05/2023" },
  { quantity: 12, cost:"12.000 VND", buyStatus: "Đã thanh toán", time: "13:00, 14/05/2023" },
  { quantity: 12, cost:"12.000 VND", buyStatus: "Đã thanh toán", time: "13:00, 14/05/2023" },
  { quantity: 12, cost:"12.000 VND", buyStatus: "Đã thanh toán", time: "13:00, 14/05/2023" },]);
  

  const users = [
    { username: 'student1', password: 'password1' },
  ];

  const countPrintStatusWait = printInfoItems.filter(item => item.printStatus === "Đang chờ").length;

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      if (selectedFile.size > 1024 * 1024) {
        alert('File size exceeds 1MB limit.');
        return;
      }

      if (!['image/png', 'image/jpeg', 'image/jpg'].includes(selectedFile.type)) {
        alert('Please select a PNG or JPEG image.');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const updatePage = (newPage) => {
    setPage(newPage);
  }

  const updatePrintTimes = (newTimes) => {
    setPrintTimes(newTimes);
  }

  const updatePrintInfoItems = (newPrintInfoItems) => {
    setPrintInfoItems(newPrintInfoItems);
  };

  const updatePaperHistoryItems = (newPaperHistoryItems) => {
    setPaperHistoryItems(newPaperHistoryItems);
  };

  return (
    <Router>
      <div className="App">
        <MaybeShowNavbar>
          <NavBar/>
        </MaybeShowNavbar>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Login users={users}/>} />
            <Route path="/Home" element={<Home printTimes={printTimes} updatePrintTimes={updatePrintTimes} numberOfPages = {page} updatePage = {updatePage} printInfoItems={printInfoItems} updatePrintInfoItems={updatePrintInfoItems}/>} />
            <Route path="/BuyPaper" element={<BuyPaper paperHistoryItems = {paperHistoryItems} updatePaperHistoryItems = {updatePaperHistoryItems} pageNumber = {page} updatePageNumber = {updatePage} />} />
            <Route path="/History" element={<History page={page} updatePage={updatePage} printInfoItems={printInfoItems} printTimes={printTimes} updatePrintTimes={updatePrintTimes} updatePrintInfoItems={updatePrintInfoItems}/>} />
            <Route path="/Print" element={<Print />} />
            <Route path="/Profile" element={<Profile image={image} handleImageChange={handleImageChange} printTimes={printTimes} page={page} waiting={countPrintStatusWait}/>} />
            <Route path="/PrintConfig" element={<PrintConfig numberOfPages = {page} printInfoItems={printInfoItems} updateNumberOfPages={updatePage} updatePrintInfoItems={updatePrintInfoItems} printTimes={printTimes} updatePrintTimes={updatePrintTimes}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
