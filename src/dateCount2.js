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
                <input type="range" min={0} max={10} value={step} onChange={e => setStep(Number(e.target.value))} />
                Step: {step}
            </h3>
            <h4>
                <button onClick={() => setCount((count) => count - step)}> - </button>
                <input type="number" value={count} onChange={e => {
                    e.preventDefault();
                    setCount(Number(e.target.value))
                }} />
                {count}
                <button onClick={() => setCount((count) => count + step)}> + </button>
            </h4>

            <span> {count === 0 ? "Today is " : count > 0 ?
                `${count} days from today is ` :
                `${count} days ago was`} </span>
            <span> {date.toDateString()} </span>

        </div>
    );
}
