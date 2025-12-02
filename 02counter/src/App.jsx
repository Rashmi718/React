import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , setCounter] = useState(15)

  const increment = ()=>{
    if (counter == 20){
      return setCounter(20);
    }
    counter += 1;
    setCounter(counter)
    console.log(counter);
  }

  const decrement = ()=>{
    if (counter == 0){
      return setCounter(0);
    }
    counter -= 1;
    setCounter(counter)
    console.log(counter);
  }

  return (
    <>
      <h1> let's play with react</h1> 
      <h1>counter value : {counter}</h1>

      <button
      onClick={increment}>increment</button>
      <br/>
      <button
      onClick={decrement}>decrement</button>
    </>
  )
}

export default App
