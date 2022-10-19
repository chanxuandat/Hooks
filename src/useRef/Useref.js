import React, { useState } from "react";

function Useref({}) {
  const [count, setCount] = useState(60);
  
  let timerId;
  const handleStart = () => {
    setInterval(() => {
      setCount((preCount) => preCount - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearImmediate(timerId);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Tang</button>
      <button onClick={handleStop}>dung</button>
    </div>
  );
}

export default Useref;
