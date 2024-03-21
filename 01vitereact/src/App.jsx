import FirstFunc from "./first"

function App() {
  const username = "coding practice"
  return (
    <>
      <FirstFunc/>
      <h2>the app is called {username}</h2> 
      <h3>working with vite</h3>
    </>
    )
}

export default App

// {username} this is called evaluated expresion (it means final outcome)
