import React, { useState, createContext } from "react";
import Content from "./Content";

import '../App.css'
export const ThemeContext = createContext();

// 1.Create context
// 2. Provider
// 3.Consumer
function UseContext() {
  const [theme, setTheme] = useState("dark");
  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  console.log(theme)
  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: "24px" }} >
        <button onClick={handleClick}>Togggle</button>
        <Content/>
      </div>
    </ThemeContext.Provider>
  );
}

export default UseContext;

// đơn giản hoá truyền dữ liệu từ components cha xuỗng component con mà không cần prop
// ComA => co
