export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(evt.target.elements);
    console.log(evt.target.elements);
    evt.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="username">Name</label>
        <input type="text" name="username" id="username" />

        <label htmlFor="usernumber">Number</label>
        <input type="text" name="usernumber" id="usernumber" />

        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
