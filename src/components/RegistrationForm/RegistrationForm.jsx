import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Too short").required("Password is required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <Field
          type="text"
          name="name"
          placeholder="Name"
          className={css.input}
        />
        <ErrorMessage name="name" component="div" className={css.error} />

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
          Register
        </button>
      </Form>
    </Formik>
  );
}
