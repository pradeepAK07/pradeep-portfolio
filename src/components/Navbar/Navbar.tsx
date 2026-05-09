import styles from "./Navbar.module.css";
import { NAV_LINKS } from "../../constant";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="z-50 fixed w-full h-20 px-12! backdrop-blur-md border-b-[0.5px] border-border/90 mx-auto flex items-center justify-center">
      <div className="w-6xl flex items-center justify-between">
        <p className="jetBrains text-2xl">{"{PA}"} </p>
        <div className="flex gap-8 items-center">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={i}
              to={link.href}
              className="font-label-mono text-label-mono dark:text-muted uppercase hover:text-accent dark:hover:text-accent transition-colors duration-200"
            >
              <p
                className={`${window.location.pathname !== link.href ? styles.navLink : styles.navLinkActive} jetBrains`}
              >
                {link.name}
              </p>
            </Link>
          ))}
        </div>
        <button className="jetBrains cursor-pointer px-6 py-2 bg-[rgb(232,160,69)] text-black font-medium hover:bg-[#B87A30] transition-colors duration-200">
          Get in Touch
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
