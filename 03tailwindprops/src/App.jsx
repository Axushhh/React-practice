import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {   // here we are passing object
    username : "ayush",
    age : 21
  }

  let myArr = [1,2,3,4] // here we are passing array
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
     <Card  username = "Axushhh" btntext="click me" Arr = {myArr}/>
     <Card username="namaste ji" btntext="visit me"/>
    </>
  )
}

export default App
