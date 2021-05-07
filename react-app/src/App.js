import Navbar from "./Navbar"
import Home from "./Home"

function App() {
  // dynamic value accepted > sting, number, array
  //dynamic value that are not accepted > object, boolean
  // const myTitle = "This is my first blog:)"
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        {/* <h1>{myTitle}</h1> */}
        <Home />
      </div>
    </div>
  )
}

export default App
