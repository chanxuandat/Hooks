import { useState } from "react";
import TodoList from "./Todolist/todo";
import Todo from "./Todolist/twoway";
import { UseEffect } from "./useEffect/UseEffect";
import UseState from "./useState/useState";

function App() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
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
    {show1 && (
      <UseEffect/>
    )}
    </div>
  );
}

export default App;
