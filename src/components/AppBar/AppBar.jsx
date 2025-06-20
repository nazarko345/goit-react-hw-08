import { useSelector } from "react-redux";
import css from "./AppBar.module.css";
import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import LogedUserNav from "../LogedUserNav/LogedUserNav";
import UserNav from "../UserNav/UserNav";

export default function AppBar() {
  const isLoged = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <Link className={css.link} to="/">Home</Link>
      {isLoged ? <LogedUserNav/> : <UserNav/>}
    </div>
  );
}
