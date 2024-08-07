import Hello from "./Hello"
import Fruits from "./Fruits"
import ConditionalComponent from "./ConditionalComponent"
import Counter from "./Counter"

function App() {
  const person = {
    name:"Kashif",
    message:"Hi there!",
    emoji:"👋",
    seatNumbers:[1,4,7]
  }
  return (
    // <div className="App">
    //   {/* <Hello person={person}/> */}
    //   <Fruits/>
    // </div>
    <Counter/>
  )
}

export default App
