import ContactItem from 'components/ContactItem/ContactItem';
import css from 'components/ContactsOfList/contactsoflist.module.css';
import { useSelector } from 'react-redux';

const ContactsOfList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const filterLowCase = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterLowCase)
  );
  return visibleContacts.length === 0 && contacts.length !== 0 ? (
    <h2>Please, add the contact</h2>
  ) : (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} item={contact} />
      ))}
    </ul>
  );
};

export default ContactsOfList;
