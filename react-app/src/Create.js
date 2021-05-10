import { useState } from "react"
import { useHistory } from "react-router-dom"
const Create = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("ana")
  const [isLoading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }
    console.log(blog)
    setLoading(true)
    setTimeout(() => {
      fetch(" http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log("new blog added")
        setLoading(false)
        //history.go(-1)
        history.push("/")
      })
    }, 1000)
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea required onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="ana">ana</option>
          <option value="alex">alex</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding blog...</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  )
}

export default Create
