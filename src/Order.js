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
    <label style={{paddingLeft: 30, userSelect:"none", cursor:"pointer"}}>
      <input 
        type="checkbox" 
        checked={btnAllChecked}
        onChange={toggleAllChecked} 
      />
      전체선택
    </label>
    <ul>
      {options.map((option, index) => (
        <li key={option} style={{userSelect: 'none', cursor: 'pointer'}}
        onClick={() => toggleOptionCheck(index)}>
          <label>
            <input 
              type="checkbox" 
              checked={checkedOption[index]} 
              onChange={() => toggleOptionCheck(index)} 
            />
            {option}
          </label>
        </li>
      ))}
    </ul>
  </>
  )
}

const MemoizedOrderOptions = React.memo(OrderOptions);

function OrderDelivery({deliveryType ,setDeliveryType}) {
  console.log('OrderDelivery 실행됨');

  return <>
  <h2>배달옵션</h2>
  <label>
    <input 
      type="radio" 
      name="delivery-type" 
      checked={deliveryType == '직접수령'} 
      onChange={() => setDeliveryType('직접수령')}
    />
    직접수령
  </label>

  <label>
    <input 
      type="radio" 
      name="delivery-type" 
      checked={deliveryType == '배달'} 
      onChange={() => setDeliveryType('배달')}
    />
    배달
  </label>
  </>
}

const MemoizedOrderDelivery = React.memo(OrderDelivery);

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

  const [deliveryType, setDeliveryType] = useState('직접수령');

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
      <MemoizedOrderDelivery
        deliveryType ={deliveryType}
        setDeliveryType ={setDeliveryType} />
      <hr />
      <div>
        현재 주문 방법: {deliveryType}
      </div>
    </>
  );
}

export default Order;