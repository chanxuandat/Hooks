import { useState } from "react";
import TodoList from "./Todolist/todo";
import Todo from "./Todolist/twoway";
import UseCallback from "./useCallback/UseCallback";
import UseContext from "./useContext/UseContext";
import { UseEffect } from "./useEffect/UseEffect";
import UseLayoutEffect from "./useLayout/UseLayoutEffect";
import UseReducer from "./useReducer/UseReducer";
import Useref from "./useRef/Useref";

import UseState from "./useState/useState";
import "./App.css";
import UseImperative from "./useImperative/UseImperative";
function App() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  return (
    <div className="App" style={{ padding: 24 }}>
      <button onClick={() => setShow(!show)}>show state</button>
      {show && (
        <div>
          <UseState />
          <Todo />
          <TodoList />
        </div>
      )}
      <button onClick={() => setShow1(!show1)}>show effect</button>
      {show1 && <UseEffect />}
      <button onClick={() => setShow2(!show2)}>show UseLayoutEffect</button>
      {show2 && <UseLayoutEffect />}
      <button onClick={() => setShow3(!show3)}>show useRef</button>
      {show3 && <Useref />}
      <button onClick={() => setShow4(!show4)}>show useCallBack</button>
      {show4 && <UseCallback />}
      <button onClick={() => setShow5(!show5)}>show reducer</button>
      {show5 && <UseReducer />}
      <button onClick={() => setShow6(!show6)}>show UseContext</button>
      {show6 && <UseContext />}
      <button onClick={() => setShow7(!show7)}>show UseImperative</button>
      {show7 && <UseImperative />}
    </div>
  );
}

export default App;
