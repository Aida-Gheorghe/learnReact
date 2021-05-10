import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="bigTitle">My first blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "purple",
            backgroundColor: "pink",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
        <Link to="/input">input</Link>
      </div>
    </div>
  )
}

export default Navbar
