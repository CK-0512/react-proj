import React, { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [no, setNo] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0];

    if ( isDark ) {
      html.classList.add("dark");
    }
    else {
      html.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <>
      <div>
        <button className="btn-toggle-theme" onClick={() => setIsDark(!isDark)}>
          테마토글
        </button>
        <button onClick={() => setNo(no + 1)}>숫자 증가 : {no}</button>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempore similique quaerat, rerum sunt alias repellat aliquid! Nesciunt fugit maiores quia obcaecati sed! A veniam eos earum porro eaque commodi?
      </div>

      <h1 className="color-primary">
        하하
        호호
      </h1>
    </>
  );
}

export default App;