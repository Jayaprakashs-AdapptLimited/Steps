import { useState } from "react";

const messages = [
  "First ⚛️",
  "Second 💼",
  "Third 🤑",
];

function App() {
  // const step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }

  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }

  function Button({bgColor, textColor, handle, children}) {
    return (
        <button style={{ backgroundColor: bgColor, color: textColor }} onClick={handle}> {children} </button>
    )
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}> &times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}> 1</div>
            <div className={step >= 2 ? "active" : ""}> 2</div>
            <div className={step >= 3 ? "active" : ""}> 3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="white" handle={handlePrevious}> <span> 👈 Previous</span> </Button>
            <Button bgColor="#7950f2" textColor="white" handle={handleNext}> 👉 Next</Button>
          </div>

        </div>
      )}
    </>
  );
}

export default App;
