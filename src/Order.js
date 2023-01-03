import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";

import "./App.css";

function OrderMainFood({mainFoodCount, setMainFoodCount}) {
  return(
    <>
    <h2>메인 (수량 : {mainFoodCount})</h2>
    <div>
      <button onClick = {()=> setMainFoodCount(mainFoodCount + 1)}>
        증가
      </button>
      <button onClick = {()=> 
        setMainFoodCount(mainFoodCount == 0 ? 0 : mainFoodCount - 1)}>
        감소
      </button>
    </div>
    </>
    )
}

function OrderOptions({selectedCount, options, toggleAllChecked, btnAllChecked, toggleOptionCheck, checkedOption}) {
  return(
  <>
  <h2>옵션 ({selectedCount} / {options.length})</h2>
    <span onClick={toggleAllChecked} style={{userSelect: 'none', cursor: 'pointer'}}>
      {btnAllChecked ? "[v]" : "[]"} 전체선택
    </span>
    <ul>
      {options.map((option, index) => (
        <li key={option} style={{userSelect: 'none', cursor: 'pointer'}}
        onClick={() => toggleOptionCheck(index)}>
          {checkedOption[index] ? "[v] " : "[] "}
          {option}
        </li>
      ))}
    </ul>
  </>
  )
}

function Order() {
  
  const [mainFoodCount, setMainFoodCount] = useState(0);
  const options = useMemo(() =>[
    "콜라",
    "머스타드 소스",
    "홀스래디쉬 소스",
    "스윗어니언 소스",
    "마라 소스",
    "칠리 소스"
  ]);

  const [checkedOption, setCheckedOption] = useState(
    new Array(options.length).fill(false)
  );

  const toggleOptionCheck = (index) => {
    const newCheckedOption = checkedOption.map((el, _index) => 
    _index == index ? !el : el);
    setCheckedOption(newCheckedOption);
  };

  const btnAllChecked = useMemo(() => 
  checkedOption.every((el) => el), 
  [checkedOption]);
  const selectedCount = useMemo(() => 
  checkedOption.filter((el) => el).length, 
  [checkedOption]);

  const toggleAllChecked = () => {
    if (btnAllChecked) {
      const newCheckedOption = checkedOption.map((el) => false);
      setCheckedOption(newCheckedOption);
    }
    else {
      const newCheckedOption = checkedOption.map((el) => true);
      setCheckedOption(newCheckedOption);
    }
  }

  return (
    <>
    <h1>음식주문</h1>
    <OrderMainFood
        setMainFoodCount={setMainFoodCount}
        mainFoodCount={mainFoodCount}
      />
      <OrderOptions
        selectedCount={selectedCount}
        options={options}
        toggleAllChecked={toggleAllChecked}
        checkedOption={checkedOption}
        btnAllChecked={btnAllChecked}
        toggleOptionCheck={toggleOptionCheck}
      />
    </>
  );
}

export default Order;