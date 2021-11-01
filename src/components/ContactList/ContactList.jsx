import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import Contact from '../Contact';

function ContactList({ deleteContact, showFilteredContacts }) {
  return (
    <ul className={s.contactList}>
      <Contact
        showFilteredContacts={showFilteredContacts}
        deleteContact={deleteContact}>
      </Contact>
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  showFilteredContacts: PropTypes.func.isRequired,
};

export default ContactList;