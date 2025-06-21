import { useSelector } from "react-redux";
import css from "./AppBar.module.css";
import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <Navigation/>
      <Link className={css.link} to="/">
        Home
      </Link>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
