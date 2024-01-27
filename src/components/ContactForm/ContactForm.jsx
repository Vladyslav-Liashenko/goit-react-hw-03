export const ContactForm = ({ onSubmit, inputValue, setInputValue }) => {
  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   onSubmit(evt.target.elements);
  //   setInputValue(evt.target.elements);
  //   evt.target.reset();
  // };
  // const handleChange = evt => {
  //   setInputValue(evt.target.elements);
  // };
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name</label>
        <input type="text" value={inputValue} name="username" id="username" />

        <label htmlFor="usernumber">Number</label>
        <input
          type="text"
          value={inputValue}
          name="usernumber"
          id="usernumber"
        />

        <button type="submit" onChange={handleChange}>
          Add contact
        </button>
      </form> */}
    </div>
  );
};
