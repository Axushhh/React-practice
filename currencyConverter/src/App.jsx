import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center text-3xl bg-violet-700 mt-10'>Currency converter</h1>
    </>
  )
}

export default App
