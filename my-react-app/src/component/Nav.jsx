import { Link } from "react-router-dom";
import Home from "../pages/Home";
function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="./home">Home</Link>
          </li>

          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
