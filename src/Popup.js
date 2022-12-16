import React, {useState} from "react";

function Popup() {
  const border = "20px solid red";
  const [popupVisible, setPopupVisible] = useState(true);

  return (
  <>
  <button className="btn btn-outline" onClick={() => setPopupVisible(!popupVisible)}>
    팝업{popupVisible ? "닫기" : "열기"}</button>  
  <hr />
  {`popupVisible : ${popupVisible}`}
  {popupVisible && <div style={{width: 100, height:100, border}}></div>}
  </>
  );
}

export default Popup;
