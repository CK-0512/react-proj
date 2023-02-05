import React, { useState } from "react";
import { Button } from "@mui/material";
import {
    atom,
    useRecoilState,
    useSetRecoilState,
    useRecoilValue,
    atomFamily
} from "recoil";

import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const pageCountAtomFamily = atomFamily({
    key: "RecoilEx/pageCountAtomFamily",
    default: (pageNo) => 0,
    effects_UNSTABLE: [persistAtom],
});

function usePageCountState(pageNo) {
    const [count, setCount] = useRecoilState(pageCountAtomFamily(pageNo)) 

    const increaseOne = () => setCount(count + 1);
    const decreaseOne = () => setCount(count - 1);
    const increaseTen = () => setCount(count + 10);
    const decreaseTen = () => setCount(count - 10);
    const clear = () => setCount(0);

    return {
        count,
        increaseOne,
        decreaseOne,
        increaseTen,
        decreaseTen,
        clear,
    }
}

function Page1() {
    const PageCountState = usePageCountState(1);
    return (
        <>
            <h1>페이지 1</h1>

            <ul>
                <li>페이지 1의 숫자 : {PageCountState.count}</li>
                <li>
                    <Button onClick={PageCountState.increaseOne} variant="outlined">
                        페이지 1의 숫자 1 증가
                    </Button>
                    <Button onClick={PageCountState.decreaseOne} variant="outlined">
                        페이지 1의 숫자 1 감소
                    </Button>
                    <Button onClick={PageCountState.increaseTen} variant="outlined">
                        페이지 1의 숫자 10 증가
                    </Button>
                    <Button onClick={PageCountState.decreaseTen} variant="outlined">
                        페이지 1의 숫자 10 감소
                    </Button>
                </li>
            </ul>
        </>
    );
}

function Page2() {
    const PageCountState = usePageCountState(2);
    return (
        <>
            <h1>페이지 2</h1>

            <ul>
                <li>페이지 2의 숫자 : {PageCountState.count}</li>
                <li>
                    <Button onClick={PageCountState.increaseOne} variant="outlined">
                        페이지 2의 숫자 1 증가
                    </Button>
                    <Button onClick={PageCountState.decreaseOne} variant="outlined">
                        페이지 2의 숫자 1 감소
                    </Button>
                    <Button onClick={PageCountState.increaseTen} variant="outlined">
                        페이지 2의 숫자 10 증가
                    </Button>
                    <Button onClick={PageCountState.decreaseTen} variant="outlined">
                        페이지 2의 숫자 10 감소
                    </Button>
                </li>
            </ul>
        </>
    );
}

function Page3() {
    const PageCountState = usePageCountState(3);
    return (
        <>
            <h1>페이지 3</h1>

            <ul>
                <li>페이지 3의 숫자 : {PageCountState.count}</li>
                <li>
                    <Button onClick={PageCountState.increaseOne} variant="outlined">
                        페이지 3의 숫자 1 증가
                    </Button>
                    <Button onClick={PageCountState.decreaseOne} variant="outlined">
                        페이지 3의 숫자 1 감소
                    </Button>
                    <Button onClick={PageCountState.increaseTen} variant="outlined">
                        페이지 3의 숫자 10 증가
                    </Button>
                    <Button onClick={PageCountState.decreaseTen} variant="outlined">
                        페이지 3의 숫자 10 감소
                    </Button>
                </li>
            </ul>
        </>
    );
}

function Page4() {
    const PageCountState = usePageCountState(4);
    return (
        <>
            <h1>페이지 4</h1>

            <ul>
                <li>페이지 4의 숫자 : {PageCountState.count}</li>
                <li>
                    <Button onClick={PageCountState.increaseOne} variant="outlined">
                        페이지 4의 숫자 1 증가
                    </Button>
                    <Button onClick={PageCountState.decreaseOne} variant="outlined">
                        페이지 4의 숫자 1 감소
                    </Button>
                    <Button onClick={PageCountState.increaseTen} variant="outlined">
                        페이지 4의 숫자 10 증가
                    </Button>
                    <Button onClick={PageCountState.decreaseTen} variant="outlined">
                        페이지 4의 숫자 10 감소
                    </Button>
                </li>
            </ul>
        </>
    );
}


export default function RecoilEx() {
    const [pageNo, setPageNo] = useState(1);
    const switchPage = () => setPageNo(pageNo + 1 <= 4 ? pageNo + 1 : 1);

    const pageName = 'page' + pageNo
    return (
        <>
            <Button onClick={switchPage} variant="outlined">스위치</Button>
            {pageName == 'page1' && <Page1 />}
            {pageName == 'page2' && <Page2 />}
            {pageName == 'page3' && <Page3 />}
            {pageName == 'page4' && <Page4 />}
        </>
    );
}
