export default function Form({ onSubmit, todo, onInputChange }) {
  return (
    <form onSubmit={onSubmit} className="header__form">
      <input
        value={todo}
        onChange={onInputChange}
        type="text"
        className="header__input"
        placeholder="Add New Todo"
      />
    </form>
  );
}
