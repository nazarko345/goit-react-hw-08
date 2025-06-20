import { selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import css from "./LogedUserNav.module.css";
import { Link } from "react-router-dom";

export default function LogedUserNav() {
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <h4 className={css.text}>Welcome {user.name}!</h4>
      <Link className={css.link} to="/logout">Log Out</Link>
    </div>
  );
}
