import React, { useState, useReducer } from "react";
import UseReducerTodo from "./UseReducerTodo";

//redux = useReducer
//state
//1, init state : 0
//2 action len / xuong
//reducer
// 1 init state : 0
//2 action : len xuong
//3 reducer
//4 dispath (kích hoạt action)

const initState = 0;
//action
const UP_ACTION = "up";
const DOWN_ACTION = "down";
//REDUCER
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state +1
    case DOWN_ACTION :
      return state -1
  
    default:
      throw new Error('inf')
  }
};
function UseReducer() {
  const [count, dispath] = useReducer(reducer,initState);

  return (
    <div style={{ padding: "23px" }}>
      <h1>{count}</h1>
      <button onClick={() => dispath(UP_ACTION)}>Len</button>
      <button onClick={() => dispath(DOWN_ACTION)}>Xuong</button>
      <UseReducerTodo/>
    </div>
  )
}

export default UseReducer;

// cung cấp thêm lựa chọn  cho state trong components
// state (kiêu dữ liệu nguyên thuỷ cơ bản) tương đương với reducer
