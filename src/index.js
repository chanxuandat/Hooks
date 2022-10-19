import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StoreProvider } from "./store";
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `noi dung comment cua lesson ${id}`,
      })
    );
  }, 2000);
}
emitComment(1);
emitComment(2);
emitComment(3);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 

      <App />
  
  </React.StrictMode>
);
