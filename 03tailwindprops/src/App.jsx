import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {          // ye smjhane k liye tha
    username: "Pushpak",
    age: 21
  }

  return (
    <>
    <h1 className='bg-green-400 test-black p-1 rounded-xl mb-4'>TailWind Test</h1>
    <Cards username="Pushpak" btnText="click me" />
    <Cards username="Anchal"  btnText="visit me" />
    </>
  )
}

export default App
