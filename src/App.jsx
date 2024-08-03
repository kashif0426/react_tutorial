import Hello from "./Hello"

function App() {
  const person = {
    name:"Kashif",
    message:"Hi there!",
    emoji:"👋",
    seatNumbers:[1,4,7]
  }
  return (
    <div className="App">
      <Hello person={person} />
    </div>
  )
}

export default App
