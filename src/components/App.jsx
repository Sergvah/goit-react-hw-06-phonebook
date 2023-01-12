import Contacts from './Contacts/Contacts';
import FilterSearch from './FilterSearch/FilterSearch';
import ContactsOfList from './ContactsOfList/ContactsOfList';

export const App = () => {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <Contacts />
      <h2>Contacts</h2>
      <FilterSearch />
      <ContactsOfList />
    </div>
  );
};
