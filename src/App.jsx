// import { useState } from 'react'
// import { Formik } from 'formik';
import contacts from './components/data/contacts.json';
import { ContactForm } from './components/ContactForm/ContactForm';
import { SearchBox } from './components/SearchBox/SearchBox';
import { ContactList } from './components/ContactList/ContactList';

function App() {
  console.log(contacts);
  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
