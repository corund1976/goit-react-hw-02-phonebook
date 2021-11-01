import PropTypes from 'prop-types';
import s from './Contact.module.css';

function Contact({ deleteContact, showFilteredContacts }) {
  return (showFilteredContacts().map(contact => {
    return (
      <li key={contact.id} className={s.contactItem}>
        <p className={s.contact}>• {contact.name}: {contact.number}</p>
        <button className={s.btn} onClick={() => deleteContact(contact.id)}>
          Delete
        </button>
      </li>
    );
  }));
};

Contact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  showFilteredContacts: PropTypes.func.isRequired,
};

export default Contact;