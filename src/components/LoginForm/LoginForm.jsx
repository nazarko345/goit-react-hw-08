import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(logIn(values));
    actions.resetForm();
  }

  return (
    <form onSubmit={handleSubmit} className={css.container}>
      <input type="email" name="email" className={css.input} />
      <input type="password" name="password" className={css.input} />
      <button className={css.button} type="submit">
        Log In ✨
      </button>
    </form>
  );
}
