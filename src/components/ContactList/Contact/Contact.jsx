import styled from "./Contact.module.css";
export const Contact = ({ name, number }) => {
  return (
    <div>
      <h2>
        <img src="/src/assets/person-fill.svg" alt="user" />
        <span className={styled.info}>{name}</span>
      </h2>
      <a href={`tel:${number}`}>
        <img src="/src/assets/telephone-fill.svg" alt="phone" />
        <span className={styled.info}>{number}</span>
      </a>
      
    </div>
  );
};
