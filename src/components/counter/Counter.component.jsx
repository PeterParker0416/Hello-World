import React, { useState } from "react";
// CSS Link
import "./Counter.styles.css";

const Counter = () => {
  const [state, setState] = useState({
    count: 10,
    theme: "dark",
  });

  const { count, theme } = state;

  const decCount = () => {
    if (count === 0) {
      alert("Count can not be negative");
      return;
    }

    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  };

  console.log("Component rendered!");
  console.log(state);

  return (
    <div id="counter_body">
      <button className="counter_btn" onClick={decCount}>
        -
      </button>
      <span>
        {count}
        {theme}
      </span>
      <button className="counter_btn">+</button>
    </div>
  );
};

export default Counter;
