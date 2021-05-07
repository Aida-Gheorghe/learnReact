import { useState } from "react"
import BlogList from "./BlogList"

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
    {
      title: "Learn React",
      body: "lorem ipsum...",
      author: "alex",
      id: 4,
    },
    {
      title: "My sweet website",
      body: "lorem ipsum...",
      author: "alex",
      id: 5,
    },
  ])

  return (
    <div className="home">
      <BlogList allBlog={blogs} bigTitle="All Blogs" /> {/*This is a prop */}
      <BlogList
        allBlog={blogs.filter((blog) => blog.author === "alex")}
        bigTitle="All Blogs by Alex"
      />
    </div>
  )
}

export default Home
