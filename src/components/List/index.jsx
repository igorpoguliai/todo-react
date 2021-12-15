import ListItem from "../ListItem/index";

export default function List({ todos, setTodos }) {
  function onCheckedClick(clickedItemId) {
    setTodos(
      todos.map((item) => {
        const { checked, id } = item;

        if (id === clickedItemId) {
          return { ...item, checked: !checked };
        } else {
          return item;
        }
      })
    );
  }

  function onDeleteClick(removeItemId) {
    setTodos(todos.filter((item) => item.id !== removeItemId));
  }

  if (todos.length) {
    return (
      <ul className="list">
        {todos.map((item) => (
          <ListItem
            key={item.id}
            checked={item.checked}
            id={item.id}
            todo={item.todo}
            addetDate={item.addetDate}
            onCheckedClick={onCheckedClick}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </ul>
    );
  } else {
    return <div className="message">you have not any todo...</div>;
  }
}
