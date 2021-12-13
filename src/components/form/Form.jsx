export default function Form({ onSubmit, todo, onChange }) {
  return (
    <form onSubmit={onSubmit} className="header__form">
      <input
        value={todo}
        onChange={onChange}
        type="text"
        className="header__input"
        placeholder="Add New Todo"
      />
    </form>
  );
}
