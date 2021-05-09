import { useState, useEffect } from "react"
import BlogList from "./BlogList"

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data from that resoursce")
          }
          return res.json()
        })
        .then((data) => {
          console.log(data)
          setBlogs(data)
          setLoading(false)
          setError(null)
        })
        .catch((err) => {
          setError(err.message)
          setLoading(false)
        })
    }, 2000)
  }, [])

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList allBlog={blogs} bigTitle="All Blogs" />}
      {/* This is a prop*/}
    </div>
  )
}

export default Home
