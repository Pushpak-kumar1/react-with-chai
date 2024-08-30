import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select()  // highLigth kerne k liye
    passwordRef.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(password)
  }, [password])
  

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()[]{}`/?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)     // index se value pick krne k liye
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])  // optimize karne k if koi changes aate hai --> memory mai rkhne k liye

 
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])  // kuch bhi change hota hai toh fir se run karo


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
           <button
           onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 hover:bg-blue-700 rounded-md'
          >copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Lenght: {length} </label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            value={length}
            onChange= {() => {
              setNumberAllowed( (prev) => !prev);
            }}
          />
        <label htmlFor='numberInput'>Numbers</label>

        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange= {() => {
              setNumberAllowed( (prev) => !prev);
            }}
          />
        <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default App
