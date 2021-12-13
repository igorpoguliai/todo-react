export default function Buttons({ todos, setTodos }) {
  const actionButtons = [
    "delete all done",
    "make all done",
    "sort by date",
    "sort by alphabet",
  ];

  function onActionButtonClick(item) {
    switch (item) {
      case "delete all done":
        setTodos(todos.filter((item) => !item.checked));
        break;
      case "make all done":
        const isEveryChecked = todos.every((item) => item.checked === true);
        setTodos(todos.map((item) => ({ ...item, checked: !isEveryChecked })));
        break;
      case "sort by date":
        setTodos(
          todos.sort((a, b) => new Date(b.addetDate) - new Date(a.addetDate))
        );
        break;
      case "sort by alphabet":
        setTodos(todos.sort((a, b) => a.note.localeCompare(b.note)));
        break;

      default:
        break;
    }
  }

  return (
    <div className="buttons">
      {actionButtons.map((item) => (
        <button
          key={item}
          onClick={() => onActionButtonClick(item)}
          className="buttons__item"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
