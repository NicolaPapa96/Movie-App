import { RiMovie2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navbar({ searchMovie, setInput, input }) {
  return (
    <div className="navbar">
      <Link to="./" className="link-navbar">
        <ul className="navbar-list">
          <li>
            <RiMovie2Fill className="icon" />
          </li>
          <li>Home</li>
        </ul>
      </Link>
      <form onSubmit={searchMovie}>
        <input
          className="navbar-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="navbar-btn">Search</button>
      </form>
    </div>
  );
}
