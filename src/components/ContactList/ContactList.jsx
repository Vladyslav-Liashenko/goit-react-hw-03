import { Contact } from './Contact/Contact';
import { useId } from 'react';
import styled from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  const liId = useId();
  return (
    <div>
      <ul className={styled.ul}>
        {contacts.map(contact => (
          <li key={liId} className={styled.contact}>
            <div>
              <Contact id={liId} name={contact.name} number={contact.number} />
            </div>
            <div>
              <button
                onClick={() => onDelete(contact.id)}
                className={styled.btmDl}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
