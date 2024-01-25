export const Contact = ({ name, number }) => {
  const handleDelete = () => {
  }
  return (
    <div>
      <h2>
        <img src="/src/assets/person-fill.svg" alt="user" />
        {name}
      </h2>
      <a href={`tel:${number}`}>
        <img src="/src/assets/telephone-fill.svg" alt="phone" />
        {number}
      </a>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
