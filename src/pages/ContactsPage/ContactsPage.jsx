import { useSelector } from "react-redux";
import { selectIsLoading, selectError } from "../../redux/contacts/selectors.js";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.contacts}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <Error />}
      <ContactList />
    </div>
  );
}
