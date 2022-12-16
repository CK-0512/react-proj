import React, {useState} from "react";

function Popup() {
  const border = "20px solid red";
  return (
  <>
  <button>팝업닫기</button>
  <hr />
  <div style={{width: 100, height:100, border}}></div>
  </>
  );
}

export default Popup;
