import Hello from "./Hello"
import Fruits from "./Fruits"

function App() {
  const person = {
    name:"Kashif",
    message:"Hi there!",
    emoji:"👋",
    seatNumbers:[1,4,7]
  }
  return (
    <div className="App">
      {/* <Hello person={person}/> */}
      <Fruits/>
    </div>
  )
}

export default App
