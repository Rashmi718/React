import {useState} from 'react'
import './App.css'

const a = parseInt(prompt("please enter first number") , 10);
const b = parseInt(prompt("please enter second number") , 10);

function Calculator(){

  const [operation1 , operationCounter1] = useState(a);
  const [operation2 , operationCounter2] = useState(b);
  const [result , setResult] = useState(null);

  const addition = ()=>{
    setResult(operation1 + operation2);
  }

  const subtraction = ()=>{
    setResult(operation1 - operation2);
  }

  const multiplication = ()=>{
    setResult(operation1 * operation2);
  }

  const Division = ()=>{
    setResult(operation1 / operation2);
  }

  return(
    <>

    <h1>Calculator</h1>
    <h2>value1 : {operation1}</h2>
    <h2>value1 : {operation2}</h2>

    <button onClick={addition}>+</button>
    <button onClick={subtraction}>-</button>
    <button onClick={multiplication}>*</button>
    <button onClick={Division}>/</button>

    <h2>result : {result}</h2>

    </>

  );
}

export default Calculator ;