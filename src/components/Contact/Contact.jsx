import { FaUser, FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={s.containerContact}>
      <div className={s.row}>
        <p className={s.paragraph}>
          <FaUser className={s.icon} />
          {name}
        </p>
        <p className={s.paragraph}>
          <FaPhoneAlt className={s.icon} />
          {number}
        </p>
      </div>
      <button className={s.btnDelete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
