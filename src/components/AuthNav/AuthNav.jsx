import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div className={css.container}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.isActive}` : css.link
        }
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.isActive}` : css.link
        }
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
}