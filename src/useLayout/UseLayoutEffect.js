import React, { useLayoutEffect, useState } from "react";

function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    if(count > 4) 
      setCount(0)
    
  },[count])

  return (
    <div style={{ padding: "30px" }}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default UseLayoutEffect;

// khas giống useEffect chỉ khác ở thứ tự hoàn thanh công việc
// 1 cập nhật lại state
// 2 cập nhật lại DOM
// render lai Ui
// goi cleanUO néu desp thay đổi
// Gọi useLayoutEffect callback (sync)
// render lại UI
