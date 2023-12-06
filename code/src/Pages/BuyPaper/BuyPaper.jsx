import "./BuyPaper.css";
import {Header, Footer, PaperLog, AddPaperModal, Modal} from "../../Components";
import { useState } from "react";

const BuyPaper = (props) => {
  const { paperHistoryItems , updatePaperHistoryItems, pageNumber,updatePageNumber } = props; 
  const [addModal, setAddModal] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addValue, setAddValue] = useState(0);
  

  const handleCloseModal = () => {
    setAddModal(false);
  };

  const handleConfirmModal = (value) => {
    setAddValue(Number(value));
    setAddModal(false);
    setIsModalOpen(true);
  }  

  const handleCloseModalOpen = () => {
    setIsModalOpen(false);

  };

  const handleConfirmModalOpen = () => {
    updatePageNumber(prev => prev + addValue);
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const yyyy = now.getFullYear();
    let mm = now.getMonth() + 1; // Months start at 0!
    let dd = now.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;
    const newObj = {
      quantity: addValue, cost: (addValue*1000).toLocaleString("de-DE") + " VND", buyStatus: "Đang thanh toán", time: hours + ":" + minutes + ", " + formattedToday
    }

    const newArray = paperHistoryItems;
    newArray.unshift(newObj);
    updatePaperHistoryItems(newArray);
    setIsModalOpen(false);
  }  


  return (

    <div className="buypaper">
      <Header/>
        <div className="contentSection">
            <div className="titleContainer">
              <span className="welcome">
                <p className="specialWelcome">Mua giấy</p>
              </span>
              <div className="paperLeft buyLog">
                <span className="paperTitle">Số giấy của bạn:</span>
                <span className="paperNumber">{pageNumber}</span>
              </div>
            </div>
          <div className="buyLog">
            <div className="title">
              <span className="boxTitle">Lịch sử mua</span>
                <button className=" addButton" id="main" onClick={() => setAddModal(true)}>
                  <img src="./Images/plus.circle.svg" className="addItem" alt="Add Icon" />
                  <p className="addItem">Mua thêm</p>
                </button>
            </div>
            <table className="table">
              <tr className="buyHeader">
                <th>STT</th>
                <th>Số lượng</th>
                <th>Số tiền</th>
                <th>Trạng thái</th>
                <th>Thời gian</th>
              </tr>
              {paperHistoryItems.map((buyPaperInfo, i) => (
                  <PaperLog
                    key={i}
                    id = {i}
                    buyInfo={buyPaperInfo}
                    />
                ))}
            </table>
            
          </div>
          {addModal && 
          <AddPaperModal onConfirm={handleConfirmModal} onClose={handleCloseModal}/>}

          {isModalOpen && 
          <Modal onConfirm={handleConfirmModalOpen} onClose={handleCloseModalOpen} 
          modalTitle={`Xác nhận huỷ đăng ký`} modalMessage={`Khi bấm "Đồng ý", hệ thống sẽ tự động trừ tiền của bạn trên BKPay.`}/>}
        </div>
      <Footer/>
    </div>
  );
};

export default BuyPaper;
