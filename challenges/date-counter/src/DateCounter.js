import React, { useState } from "react";

const DateCounter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const stepDecrement = () => {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  };

  const stepIncrement = () => {
    if (step > 0) {
      setStep((s) => s + 1);
    }
  };

  const countDecrement = () => {
    setCount((c) => c - step);
  };

  const countIncrement = () => {
    setCount((c) => c + step);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <button onClick={stepDecrement}>-</button>
        <span>Step : {step}</span>
        <button onClick={stepIncrement}>+</button>
      </div>

      <div>
        <button onClick={countDecrement}>-</button>
        <span>Count : {count}</span>
        <button onClick={countIncrement}>+</button>
      </div>

      <p>
        {count > 0
          ? ` ${date.toDateString()} days from today is `
          : count === 0
          ? `Today is  ${date.toDateString()}`
          : ` ${count * -1} days ago  was ${date.toDateString()}`}{" "}
      </p>
    </div>
  );
};

export default DateCounter;
