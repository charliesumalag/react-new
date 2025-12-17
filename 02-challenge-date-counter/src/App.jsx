import React, { useState } from 'react'
import "./App.css";
const App = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date ,setDate] = useState(new Date());


  const addDays = (date, days)  => {
    const result = new Date(date);
    result.setDate(result.getDate + days)
    console.log(result);

  }


  const addStep = () => {
    setStep(step => step + 1);
  }
    const subStep = () => {
    if (step > 1) {
      setStep(step => step - 1);
    }
  }
  const addCount = () => {
    setCount(count => count + step);
    addDays(new Date, count);
  }

  const subCount = () => {
    setCount(count => count - step);
  }


  return (
    <div className='container'>
      <div>
        <button onClick={subStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={addStep}>+</button>
      </div>
       <div>
        <button onClick={subCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={addCount}>+</button>
      </div>
      <div>
        <span>{count} from today is </span>
      </div>
    </div>
  )
}

export default App
