import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contact, onDelete }) => {
  return (
    <ul className={s.contactList}>
      {contact.map(({ name, number, id }) => (
        <li key={id} className={s.containerContactList}>
          <Contact id={id} name={name} number={number} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
