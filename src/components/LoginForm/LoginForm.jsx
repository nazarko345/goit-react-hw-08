import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Too short").required("Password is required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  const values = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={values}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <Field
          type="email"
          name="email"
          placeholder="Email"
          className={css.input}
        />
        <ErrorMessage name="email" component="div" className={css.error} />

        <Field
          type="password"
          name="password"
          placeholder="Password"
          className={css.input}
        />
        <ErrorMessage name="password" component="div" className={css.error} />

        <button className={css.button} type="submit">
          Log In ✨
        </button>
      </Form>
    </Formik>
  );
}
