import React, { useState } from "react";

function NumberCounter() {
  const [no, setNo] = useState(0);

  return (
    <>
    숫자 : { no }
    <hr />
    <button onclick={() => setNo(no + 1)}>증가</button>
    </>
  );
}

export default NumberCounter;
