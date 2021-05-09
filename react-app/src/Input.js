import { useState } from "react"

const MyInput = () => {
  const [titles, setTitles] = useState("")
  return (
    <div className="firstForm">
      <form action="">
        <label>Your input:</label>
        <input
          type="text"
          required
          value={titles}
          onChange={(e) => setTitles(e.target.value)}
        />
        <button>Here</button>
        <p>{titles}</p>
      </form>
    </div>
  )
}

export default MyInput
