import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8) // 8 is default value
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  
  // useRef hook
  const passwordRef = useRef(null)  
  // the useRef hook is used to show the user what they copied (highlighting the area)
  // we passed null bcs we dont have any value at present
  
  const [password, setPassword] = useState("")  // the setPassword is used to optimise the code so it can put it in memory and wont end up in forever loop so we use setPassword (not necessary to use)
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"


    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
     
    pass += str.charAt(char)  // this will return the character from str
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword]) ///setPassword is used to optimise the code
   // in useCallBack we passed a dependency which we have to optimise  

  const copyPasswordToClipboard = useCallback(() =>{  
    passwordRef.current?.select()
    // we used ref bcs the used should properly interract when they copy (highlighting)   
    // after current '?' is optional select, it is used bcs zero can also be there
    // passwordRef.current?.setSelectionRange(0,20) this is used to copy an particular range only
    windown.navigator.clipboard.writeText(password)
    // the password will be selected by this step but for better view we have used useRef
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charAllowed, setPassword])
   // but in useEffect it is used if any changes occur then run again

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500 text-black-900">
        <h1 className='text-center text-white my-9'>Password Creator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
          value={password} 
          className="outline-none w-full py-1 px-3"
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button 
          className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >copy</button> 
        </div>
        <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={25}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}} // e is event
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
      </div>    
    </>
  )
}

export default App
