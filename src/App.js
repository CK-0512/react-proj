import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";

import "./App.css";

let SubCallCount = 0;
function Sub({no1, no2, calculateFunc}) {
  SubCallCount++;
  console.log(`SubCallCount : ${SubCallCount}`);
  
  return(
  <>
    <div style={{border : '10px solid red', padding : 10}}>
      입력: {no1}, {no2}
      <br/>
      결과 : {calculateFunc(no1, no2)}
      </div>
  </>
  )
}

let AppCallCount = 0;

const MemoisedSub = React.memo(Sub);

function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`);

  const [no1, setNo1] = useState(0);
  const [no2, setNo2] = useState(0);


  const calculateFunc = useCallback((a, b) => a + b + no1, [no1]);

  return (
    <>
     <div>안녕하세요.</div>
     <button onClick={() => setNo1(no1 + 1)}>버튼 : {no1}</button>
     <hr/>
     <button onClick={() => setNo2(no2 + 1)}>버튼 : {no2}</button>
     <MemoisedSub no1={10} no2={20} calculateFunc={calculateFunc}/>
    </>
  );
}

export default App;