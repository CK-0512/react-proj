import React, { useState } from "react";

function NoRecord() {
    const [no, setNo] = useState('');
    const [recordNos, setRecordNos] = useState([10, 20, 30]);

    const saveNo = (e) => {
        if ( no === '') {
            alert('숫자를 입력해주세요.')
            return;
        }
        setRecordNos([...recordNos, no]);
        setNo("");
    }

    const li = recordNos.map((el, index) => <li key={index}>- {el}</li>)
    return (
        <>
            <h1>숫자기록</h1>
            <form onSubmit={(e) => {
                e.preventDefault(); 
                saveNo()}}>
                    
                <input type="number" 
                    value={no} 
                    onChange={(e) => setNo(e.target.valueAsNumber)} 
                    className="input w-full max-w-xs"/>
            </form>
            <button type="submit" className="btn">
                기록
            </button>

            <hr />

            <h1>기록된 숫자 v1 : [{recordNos.join(",")}]</h1>

            <hr />

            <h1>기록된 숫자 v2-1 : <ul>{li}</ul></h1>

            <hr />

            <h1>기록된 숫자 v2-2 : 
                <ul>
                    {recordNos.map((el, index) => (<li key={index}>- {el}</li>))}
                </ul>
            </h1>
        </>
    )
}

export default NoRecord