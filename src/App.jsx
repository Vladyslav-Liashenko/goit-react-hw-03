import { useState } from 'react';
// import { Formik } from 'formik';
import contactsData from './components/data/contacts.json';
import { ContactForm } from './components/ContactForm/ContactForm';
import { SearchBox } from './components/SearchBox/SearchBox';
import { ContactList } from './components/ContactList/ContactList';

function App() {
  //CONTACT LIST//
  const [allContacts, setAllContacts] = useState(contactsData);

  const deleteContact = (contactId) => {
    const updatedContacts = allContacts.filter(
      (contact) => contact.id !== contactId
    );
    setAllContacts(updatedContacts);
  };
  //CONTACT LIST//

  // FILTER
  const [inputValue, setInputValue] = useState('');

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const filteredContacts = allContacts.filter((contact) =>
contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  //FILTER//

  // const makeContact = props => {
  //   console.log(props);
  // };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
      // onSubmit={makeContact}
      // inputValue={inputValue}
      // setInputValue={setInputValue}
      // onChange={makeContact}
      />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
