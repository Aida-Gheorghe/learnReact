const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="bigTitle">My first blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "purple",
            backgroundColor: "pink",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </div>
  )
}

export default Navbar
