import { Link } from "react-router-dom"

const BlogList = (props) => {
  const blogs = props.allBlog
  const bigTitle = props.bigTitle

  return (
    <div className="BlogList">
      <h2>{bigTitle} </h2>

      {blogs
        .slice(0)
        .reverse()
        .map((blog) => (
          <div className="preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Author: {blog.author}</p>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default BlogList
