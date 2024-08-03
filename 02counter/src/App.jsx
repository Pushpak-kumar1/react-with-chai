import { useState } from 'react'         // yha se HOOk aata hai
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) //kuchBhiDeskte

  //let counter = 15  --> aise only console mai he dikhega


  //Function to add Number
  const addValue = () => {
    //console.log("clicked", counter);   // UI updation mai problem aaegi if varial k through krenge
    //counter += 1;
      if (counter < 20) {
        setCounter(counter + 1);
      }
  }

  // Function to remove Number
  const removeValue = () => {
      if (counter > -1) {
        setCounter(counter - 1);
      }
  }

  
  return (
    <>
      <h1> Vite + React </h1>
      <h2> Counter value: {counter} </h2>
      
      <button onClick={addValue}> Add Value </button>
      <br />
      <br />
      <button onClick={removeValue}> Remove Value </button>
    </>
  )
}

export default App
