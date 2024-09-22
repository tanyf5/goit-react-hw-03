import css from './Contact.module.css';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.item}>
      <div>
        <p>
          <IoPersonSharp className={css.icon} size={12} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} size={12} />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}