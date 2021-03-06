import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
  const { datas: blogs, isLoading, error } = useFetch(
    "http://localhost:8000/blogs"
  )

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
