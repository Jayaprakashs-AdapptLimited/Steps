import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const date = new Date("nov 1 2024");
  console.log(date);
  console.log(date.getDate());
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }

  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}> 1</div>
            <div className={step >= 2 ? "active" : ""}> 2</div>
            <div className={step >= 3 ? "active" : ""}> 3</div>
          </div>

          {/* <p className="message">
            Step {step}: {messages[step - 1]}
          </p> */}

          <StepComponent step={step}>
            {messages[step - 1]}
            <div className="buttons"> 
            <Button
              bgColor="#e7e7e7"
              color="#333"
              onClick={() => alert(`Learn How to ${messages[step - 1]}`)}
            >
              Learn How
            </Button>
            </div>
          </StepComponent>
          <div className="buttons">
            <Button bgColor="#7950f2" color="white" onClick={handlePrevious}>
              <span> 👈 </span> Previous
            </Button>
            <Button bgColor="#7950f2" color="white" onClick={handleNext}>
              <span> 👉 </span> Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepComponent({ step, children }) {
  return (
    <div className="message">
      <h3> Step {step}: </h3>
      {children}
    </div>
  );
}

function Button({ bgColor, color, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
