import './Form.css'

function Form({ setSearchTerm }) {
  const eventHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form className="form-header" onSubmit={(e) => e.preventDefault()}>
      <input
        onChange={eventHandler}
        className="input-header"
        type="search"
        placeholder="🔍 Search for a movie..."
      />
      <button className="btn-search">Search</button>
    </form>
  );
}

export default Form;
