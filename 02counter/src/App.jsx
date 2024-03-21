import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter ] = useState(15)  // '', "", [], {} , (), you can pass anything

  // let counter = 15

  const addvalue = () =>{
    if(counter < 30){console.log("clicked", counter);
    // counter =  counter + 1
    setCounter(counter + 1)
  }
};

const removevalue = () => {
  if(counter > 0){
    console.log("clicked",counter);
  setCounter(counter - 1)
  }
}

  return (
    <>
    <h1>First Project</h1>  
    <h2>counter value : {counter}</h2>
    <button onClick={addvalue}>Add value</button>
    <br />
    <button onClick={removevalue}>Remove value</button>  
    </>
  )
}

export default App
