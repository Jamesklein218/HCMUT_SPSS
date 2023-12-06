import "./BuyPaperLog.css";
const PaperLog = (props) => {
    const {id, buyInfo} = props;
    let statusClassName;

    if (buyInfo.buyStatus === "Đang thanh toán") {
      statusClassName = "waiting";
    } else {
      statusClassName = "success";
    }

    return(
      <tr>
        <td>{id+1}</td>
        <td>{buyInfo.quantity}</td>
        <td>{buyInfo.cost}</td>
        <td><span className={statusClassName}>{buyInfo.buyStatus}</span></td>
        <td>{buyInfo.time}</td>
      </tr>
    )
  };

export default PaperLog;