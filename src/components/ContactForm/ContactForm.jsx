import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";

const defaultValues = {
  name: "",
  tel: "",
};

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "It's too short")
    .max(30, "It's too long!")
    .required("Required"),
  tel: Yup.string()
    .min(3, "It's too short")
    .max(30, "It's too long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        tel: values.tel,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={defaultValues}
      validationSchema={ContactsSchema}
    >
      <Form className={css.form}>
        <Field
          className={css.name}
          type="text"
          name="name"
          placeholder="name"
        />
        <ErrorMessage className={css.error} name="name" component="span" />
        <Field
          className={css.tel}
          type="tel"
          name="tel"
          placeholder="phone number"
        />
        <ErrorMessage className={css.error} name="tel" component="span" />

        <button type="submit" className={css.addBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
