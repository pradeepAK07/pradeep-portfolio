import styles from "./Navbar.module.css";
import { NAV_LINKS } from "../../constant";
import { NavLink } from "../../index.styles";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Portfolio</div>
      <div className={styles.navLinks}>
        {NAV_LINKS.map((link) => (
          <NavLink key={link.name}>
            <Link className={styles.navLink} to={link.href}>
              {link.name}
            </Link>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
