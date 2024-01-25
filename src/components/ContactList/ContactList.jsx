import { Contact } from './Contact/Contact';

export const ContactList = ({ contacts }) => {

  return (
    <div>
      <ul>
        {contacts.map(el => (
          <li key={el.id}>
            <Contact id={el.id} name={el.name} number={el.number} />
          </li>
        ))}
      </ul>
    </div>
  );
};
