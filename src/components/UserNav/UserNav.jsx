import css from "./UserNav.module.css";
import { Link } from "react-router-dom";

export default function UserNav() {
  return (
    <div className={css.container}>
      <Link className={css.link} to="/register">Register</Link>
      <Link className={css.link} to="/login">Log In</Link>
    </div>
  );
}
