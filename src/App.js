import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClickk = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleMul = () => {
    setCount(count * 5);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="App">
        <p>{count}</p>
        <button onClick={handleClick}>INC</button>
        <button onClick={handleClickk}>DEC</button>
        <button onClick={handleMul}>MUL</button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </>
  );
}
