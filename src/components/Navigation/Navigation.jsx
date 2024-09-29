import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div className={s.navWrapper}>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.listItem}>
            <NavLink className={s.navLink} to="/">
              Home
            </NavLink>
          </li>
          <li className={s.listItem}>
            <NavLink className={s.navLink} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
