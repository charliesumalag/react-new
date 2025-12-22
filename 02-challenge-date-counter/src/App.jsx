import React, { useState } from 'react'
import "./App.css";
const App = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date ("june 21 2027");
  date.setDate(date.getDate());
  console.log(date.getDate());


  // const [date ,setDate] = useState(new Date());


  const addDays = (date, days)  => {
    const result = new Date(date);
    console.log(result);


    // result.setDate(result.getDate + days)
    // console.log(result);

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
      <p>
        <span>
          {count === 0
          ? "Today is"
          : count > 0
          ? `${count} days from today is`
          : `${count} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  )
}

export default App
