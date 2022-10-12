import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(false);
  const handleClick = () => {
    setCount(count + 1);
  };
  const [info, setInfo] = useState({
    name: "tien dat",
    age: 18,
  });
  const handleUpdate = () => {
    setInfo((pre) => {
      //logic
      return {
        ...pre,
        bio: "money over b",
      };
    });
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Button</button>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UseState;
