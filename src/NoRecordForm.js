import React, { useState } from "react";

function NoRecordForm() {
  const [recordedNos, setRecordedNos] = useState([10, 20, 30]);

  const saveNo = (form) => {
    form.no.value = form.no.value.trim();
    if (form.no.value.length == 0) {
      alert("숫자를 입력해주세요.");
      form.no.focus();
      return;
    }

    setRecordedNos([...recordedNos, form.no.value]);

    form.no.value = "";
    form.no.focus();
  };

  //const li = [1, 2, 3].map((el, index) => <li key={index}>{el}</li>);
  const li = recordedNos.map((el, index) => <li key={index}>-{el}</li>);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNo(e.target);
        }}
      >
        <input
          type="number"
          name="no"
        />
        <button type="submit">기록</button>
      </form>

      <hr />

      <h1>기록된 숫자 v1</h1>
      {recordedNos.join(",")}

      <hr />

      <h1>기록된 숫자 v2</h1>
      <ul>{li}</ul>

      <hr />

      <h1>기록된 숫자 v2-2</h1>
      <ul>
        {recordedNos.map((el, index) => (
          <li key={index}>-{el}</li>
        ))}
      </ul>
    </>
  );
}

export default NoRecordForm