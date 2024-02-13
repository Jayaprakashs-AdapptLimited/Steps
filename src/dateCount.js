import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  console.log(date);
  date.setDate(date.getDate() + count);
  return (
    <div className="App">
      <h3>
        <button onClick={() => setStep((step) => step - 1)}> - </button>Step:
        {step}
        <button onClick={() => setStep((step) => step + 1)}> + </button>
      </h3>
      <h4>
        <button onClick={() => setCount((count) => count - step)}> - </button>
        Count: {count}
        <button onClick={() => setCount((count) => count + step)}> + </button>
      </h4>
      <span> {count === 0 ? "Today is " : count > 0 ? 
      `${count} days from today is `: 
      `${count} days ago was`} </span>
      <span> {date.toDateString()} </span>
    </div>
  );
}
