import { useState } from "react"

const Home = () => {
  //reactive values
  const [name, setName] = useState("Ana")
  const [age, setAge] = useState(25)

  const handleClick = () => {
    setName("Miky")
    setAge(30)
  }

  return (
    <div className="home">
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  )
}

export default Home
