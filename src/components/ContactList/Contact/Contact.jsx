import styled from './Contact.module.css';
import userIcon from '../../../assets/person-fill.svg';
import telIcon from '../../../assets/telephone-fill.svg';

export const Contact = ({ name, number, onDelete, contactId }) => {
  return (
    <div className={styled.card}>
      <div>
        <h2>
          <img src={userIcon} alt="user" />
          <span className={styled.info}>{name}</span>
        </h2>
        <a href={`tel:${number}`}>
          <img src={telIcon} alt="phone" />
          <span className={styled.info}>{number}</span>
        </a>
      </div>
      <button onClick={() => onDelete(contactId)}>
        Delete
      </button>
    </div>
  );
};
