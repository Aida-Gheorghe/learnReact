import { useState, useEffect } from "react"
import BlogList from "./BlogList"

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlog)
  }

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setBlogs(data)
      })
  }, [])

  return (
    <div className="home">
      {blogs && <BlogList allBlog={blogs} bigTitle="All Blogs" />}
      {/* This is a prop*/}
    </div>
  )
}

export default Home
