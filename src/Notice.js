import classnames from 'https://cdn.skypack.dev/classnames';
import React, {useState} from 'react';

let NotifyOnce__workDone = false;

function NotifyOnce({children}) {
    const [visible, setVisible] = useState(false);
    const [workdone, setWorkdone] = useState(false);
    
    if ( workdone == false) {
        setTimeout(() => {
            setVisible(true);
        }, 1000);
    
        setTimeout(() => {
            setVisible(false);
        }, 3000);

        setWorkdone(true);
    }

    return <div 
            className={classnames("fixed transition-all right-[10px]", 
            {"top-[-60px]" : !visible},
            {"top-[10px]" : visible}
            )}
            >
                {children}
            </div>
}

function Alert({ color:color_, children }) {
    const color = color_ ?? "red";
    return (
        <div className="alert alert-info shadow-lg">
            <div className={`text-[${color}]`}>
                <span>
                    <i className="fa-solid fa-circle-info"></i>
                </span>
                <span>{children}</span>
            </div>
        </div>
    );
}

function Notice() {
    return (
    <>
        <NotifyOnce><Alert color="black">"안녕" 반가워</Alert></NotifyOnce>
        <div>
            lorem adflksjdafoiva sdfjoa fejlkq pjj ixzclk qwoiwqr jl
            k wqoihlk fj qwiojqwo ejklsa dioqw ehs akl qweohqw el
            kjlas d qweioqjwlksajdlk zxcjqwolkqwjd qwoijqwlkfassjoiqwh
            dwqihojdlkasfgs g sdaweafwafqw ewqewldaskjcxzklzxn
            lorem adflksjdafoiva sdfjoa fejlkq pjj ixzclk qwoiwqr jl
            k wqoihlk fj qwiojqwo ejklsa dioqw ehs akl qweohqw el
            kjlas d qweioqjwlksajdlk zxcjqwolkqwjd qwoijqwlkfassjoiqwh
            dwqihojdlkasfgs g sdaweafwafqw ewqewldaskjcxzklzxn
        </div>
    </>
    );
}

export default Notice;