import { Link } from 'react-router-dom';
import styles from "../../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="/" className={styles.link}>Home</Link>
        </li>
        <li className={styles.li}>
          <Link to="calculator" className={styles.link}>Calculator</Link>
        </li>
        <li className={styles.li}>
          <Link to="test" className={styles.link}>Test NFT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;