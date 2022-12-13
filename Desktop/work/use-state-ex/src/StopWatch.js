import Reactm, {useState} from "react";

function StopWatch() {
  const [num, setNum] = useState(0);

  setTimeout(() => setNum(num + 1), 1000);
  return (
  <>
    숫자 : {num}
  </>
  );
}

export default StopWatch;
