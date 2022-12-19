import React, { useState } from "react";

function NoRecord() {
    const [no, setNo] = useState(0);
    const [recordNos, setRecordNos] = useState([]);

    const saveNo = () => {
        setRecordNos([...recordNos, no]);
    }
    return (
        <>
            <h1>숫자기록</h1>
            <input type="number" 
            value={no} 
            onChange={(e) => setNo(e.target.valueAsNumber)} 
            className="input w-full max-w-xs"/>
            <button type="button" onClick={saveNo} className="btn">
                기록
            </button>
            <hr />
            기록된 숫자 : [{recordNos.join(",")}]
        </>
    )
}

export default NoRecord