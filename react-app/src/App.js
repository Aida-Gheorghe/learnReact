import "./App.css"

function App() {
  // dynamic value accepted > sting, number, array
  //dynamic value that are not accepted > object, boolean
  const myTitle = "This is my first blog:)"
  return (
    <div className="App">
      <div className="content">
        <h1>{myTitle}</h1>
      </div>
    </div>
  )
}

export default App
