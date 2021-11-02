import PropTypes from 'prop-types';
import s from './Contact.module.css';

function Contact({ deleteContact, id, name, number }) {
  const deleteContactCB = () => deleteContact(id);
  
  return (
    <li className={s.contactItem}>
      <p className={s.contact}>• {name}: {number}</p>
      <button className={s.btn} onClick={deleteContactCB}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;