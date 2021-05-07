const Home = () => {
  // learn events

  const myName = "Ana"

  const selfInvoked = () => {
    console.log("selfInvoked function")
  }

  const handleClick = () => {
    console.log("invoke on click This is a test")
  }

  const anonymousFunc = (name, e) => {
    console.log(`My name is ${name}.`)
    console.log(e.target)
  }
  return (
    <div className="home">
      <h2>Homepage</h2>

      {/*self invoked!*/}
      <button onClick={selfInvoked()}>func self invoked</button>

      {/*refrence to a function*/}
      <button onClick={handleClick}>Click here</button>

      {/*give a parameter to a func*/}
      <button onClick={(e) => anonymousFunc(myName, e)}>anonymous btn</button>
      {/*you can access e in anonymousFunc only if you pass as a param */}
    </div>
  )
}

export default Home
