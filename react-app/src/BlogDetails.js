import { useHistory, useParams } from "react-router-dom"
import useFetch from "./useFetch"

const BlogDetails = () => {
  const { id } = useParams()
  const { datas: blog, error, isLoading } = useFetch(
    "http://localhost:8000/blogs/" + id
  )
  const history = useHistory()

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then((res) => {
      history.push("/")
    })
  }

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Author: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
