// import { useState } from 'react'
// import { Formik } from 'formik';
import contacts from './components/data/contacts.json';
import { ContactForm } from './components/ContactForm/ContactForm';
import { SearchBox } from './components/SearchBox/SearchBox';
import { ContactList } from './components/ContactList/ContactList';

function App() {
  
  const makeContact = props => {
    console.log(props);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
        onSubmit={makeContact}
      />
      <SearchBox />
      <ContactList
        contacts={contacts}
      />
    </>
  );
}

export default App;
