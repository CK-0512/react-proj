import React, { useState, useEffect, useRef } from "react";

import "./App.css";

let AppCallCount = 0;
let SubCallCount = 0;

function Sub({ appNo }) {
  SubCallCount++;
  console.log(`sub가 ${SubCallCount}번 실행됨!`)
  
  const [no, setNo] = useState(0);
  const [no2, setNo2] = useState(0);

  useEffect(() => {
    console.log("effect 1 : 단 한 번 실행");
  }, []);

  useEffect(() => {
    console.log("effect 2 : 부모(App)의 appNo가 바뀔 때 마다 실행");
  }, [appNo]);

  useEffect(() => {
    console.log("effect 3 : 나(Sub)의 no가 바뀔 때 마다 실행");
  }, [no]);

  useEffect(() => {
    console.log("effect 4 : 나(Sub)의 appNo 혹은 no가 바뀔 때 마다 실행");
  }, [appNo, no]);

  useEffect(() => {
    console.log("effect 5 : 매 번 실행");
  });

  return (
    <>
    <div style={{ border: "10px solid blue", padding: 10 }} >
      App no : {appNo}
      <hr />
      <button onClick={() => setNo(no + 1)}>버튼 : {no}</button>
      <button onClick={() => setNo2(no2 + 1)}>버튼2 : {no2}</button>
    </div>
    </>
  );
}

function App() {
  AppCallCount++;
  console.log(`app이 ${AppCallCount}번 실행됨!`)
  const [no, setNo] = useState(0);

  return (
    <>
      <div style={{ border: "10px solid red", padding: 10 }} >
      <button onClick={() => setNo(no + 1)}>버튼 : {no}</button>
      <hr />
      <Sub appNo={no}/>
      </div>
    </>
  );
}

export default App;