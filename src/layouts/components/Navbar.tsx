import { Link } from 'react-router-dom';
import "../../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/2nd-project">NFT card</Link>
        </li>
        <li>
          <Link to="calculator">Calculator</Link>
        </li>
        <li>
          <Link to="test">Test</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;