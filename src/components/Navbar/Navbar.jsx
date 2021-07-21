import style from "./Navbar.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className={style.navbarNav}>
        <div className="container">
          <div className={style.navbar}>
            <Link to="/" className={style.logo}>
              Blog
            </Link>
            <ul className={style.nav}>
              <li className={style.navItem}>
                <Link to="/articles" className={style.navLink}>
                  Articles
                </Link>
              </li>
              <li className={style.navItem}>
                <Link to="/profile" className={style.navLink}>
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
