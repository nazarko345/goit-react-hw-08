import css from "./Contact.module.css";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contacts }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(contacts.id));
  }

  return (
    <li className={css.item}>
      <span className={css.span}>
        <FaUserAlt />
        {contacts.name}
      </span>
      <span className={css.span}>
        <BsFillTelephoneFill />
        {contacts.number}
      </span>
      <button onClick={handleClick} className={css.deleteBtn}>
        Delete
      </button>
    </li>
  );
}
