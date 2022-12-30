import React, { useState, useEffect, useRef, useMemo } from "react";

import "./App.css";

function isPrimeNumber(no) {
  for ( let i = 2; i < no; i++ ) {
    if ( i * i > no ) {
      break;
    }
    
    if ( no % i == 0 ) {
      return false;
    }
  }
  
  return true;
}

function getPrimeNumbers(max) {
  const primeNumbers = [];
  
  for ( let i = 2; i <= max; i++ ){
    if ( isPrimeNumber(i) ) {
      primeNumbers.push(i);
    }
  }
  
  return primeNumbers;
}

function getPrimeNumbersCount(max) {
  return getPrimeNumbers(max).length;
}

let PrimeNosCountCallCount = 0;

function PrimeNosCount( {max} ) {
  PrimeNosCountCallCount++;
  console.log(`PrimeNosCountCallCount : ${PrimeNosCountCallCount}`);

  const count = getPrimeNumbersCount(max);
  return (
  <div style={{border : "10px solid black", padding : 100}}>
    1부터 {max} 사이에 존재하는 소수의 개수는 : {count}
    </div>
  );
}

const MemoisedPrimeNosCount = React.memo(PrimeNosCount);

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`);

  const [no, setNo] = useState(0);

  return (
    <>
      <MemoisedPrimeNosCount max={100}/>
      <hr />
      <MemoisedPrimeNosCount max={200}/>
      <hr />
      <MemoisedPrimeNosCount max={300}/>
      <hr />
      <MemoisedPrimeNosCount max={1000000}/>
      <hr />
      <button onClick={() => setNo(no + 1)}>버튼 : {no}</button>
      <hr />
      <MemoisedPrimeNosCount max={no} />
    </>
  );
}

export default App;