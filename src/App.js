import React, { useState, useEffect, useRef } from "react";

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

function App() {
  const [primeNumbersCount, setPrimeNumbersCount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    form.number.value = form.number.value.trim();

    if (form.number.value.length == 0) {
      alert('숫자를 입력해주세요.')
      form.number.focus();
      return;
    }

    const number = form.number.valueAsNumber;
    form.number.focus();

    const primeNumbersCount = getPrimeNumbersCount(number);
    setPrimeNumbersCount(primeNumbersCount);

  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type={"number"} name="number" placeholder="숫자를 입력해주세요."/>
        <input type={"submit"} value="확인" />
        <hr />
        <div>소수의 개수 : {primeNumbersCount}</div>
      </form>
    </>
  );
}

export default App;