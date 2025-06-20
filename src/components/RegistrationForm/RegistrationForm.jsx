import { useDispatch } from "react-redux";
import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(register(values));
    actions.resetForm();
  }

  return (
    <form onSubmit={handleSubmit} className={css.container}>
      <input type="text" name="name" className={css.input} />
      <input type="email" name="email" className={css.input} />
      <input type="password" name="password" className={css.input} />
      <button className={css.button} type="submit">
        Register
      </button>
    </form>
  );
}
