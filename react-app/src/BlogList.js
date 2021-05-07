const BlogList = (props) => {
  const blogs = props.allBlog
  const bigTitle = props.bigTitle
  return (
    <div className="BlogList">
      <h2>{bigTitle} </h2>
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

export default BlogList
