import React, { useState } from 'react'
import "./App.css";


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


const App = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    if (step <= 2) {
      setStep(step + 1);
    }
  }
   const prevStep = () => {
    if (step >= 2) {
      setStep(step - 1);
    }
  }
  return (
    <div className='steps'>
      <div className='numbers'>
        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
      </div>
      <p className='message'>{step} : {messages[step-1]}</p>
      <div className='buttons'>
        <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={prevStep}>Previous</button>
        <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={nextStep}>Next</button>
      </div>
    </div>
  )
}

export default App
