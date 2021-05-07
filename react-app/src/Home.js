import { useState } from "react"

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My first website",
      body: "lorem ipsum...",
      author: "ana",
      id: 1,
    },
    {
      title: "My second website",
      body: "lorem ipsum...",
      author: "miky",
      id: 2,
    },
    {
      title: "My third website",
      body: "lorem ipsum...",
      author: "alex",
      id: 3,
    },
  ])
  return (
    <div className="home">
      {blogs.map((blog /*template! */) => (
        <div className="preview" key={blog.id}>
          {/*always use key, the key must be unique! */}
          <h2>{blog.title}</h2>
          <p>Author: {blog.author}</p>
        </div>
      ))}
    </div>
  )
}

export default Home
