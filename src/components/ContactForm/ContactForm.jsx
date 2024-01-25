export const ContactForm = ({
  onSubmit,
  inputValueName,
  inputValueNumber,
  setInputValue,
}) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(evt.target.elements);
    setInputValue(evt.target.elements);
    evt.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name</label>
        <input
          type="text"
          value={inputValueName}
          name="username"
          id="username"
        />

        <label htmlFor="usernumber">Number</label>
        <input
          type="text"
          value={inputValueNumber}
          name="usernumber"
          id="usernumber"
        />

        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
