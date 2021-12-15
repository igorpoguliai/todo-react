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
        setTodos(
          todos.map((item) => ({
            ...item,
            checked: !isEveryChecked,
          }))
        );
        break;
      case "sort by date":
        const sortDate = todos.sort(
          (a, b) =>
            console.log(new Date(b.addetDate)) -
            console.log(new Date(a.addetDate))
        );
        setTodos([...sortDate]);
        break;
      case "sort by alphabet":
        const sortAlphabet = todos.sort((a, b) => a.todo.localeCompare(b.todo));
        setTodos([...sortAlphabet]);
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
