import { useState } from "react";

const messages = [
  "First ⚛️",
  "Second 💼",
  "Third 🤑",
];



function App() {

  // const arr = useState(2);
  // console.log(arr);
  // const step = 2;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // alert("Previous");
    if(step > 1)
    // setStep(step - 1);
    setStep((s) => s - 1);
  }

  function handleNext() {
    // alert("Next");
    if(step < 3)
    // setStep(step + 1);
    setStep((s) => s + 2);
  }
  return (
    <> 
      <button className="close" onClick = {() => setIsOpen(is => !is)}> &times;</button>
    {isOpen && (<div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}> 1</div>
        <div className={step >= 2 ? "active" : ""}> 2</div>
        <div className={step >= 3 ? "active" : ""}> 3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}
        onClick={handlePrevious}
        >
          
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}
        onClick={handleNext}>
          Next
        </button>
      </div>
    </div>)}
    </>
  );
}

export default App;