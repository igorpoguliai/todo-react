import ListItem from "../list-item";

export default function List({ todos, setTodos }) {
  function onCheckedClick(clickedItemId) {
    const noteIsDone = todos.map((item) => {
      const { checked, id } = item;

      if (id === clickedItemId) {
        return { ...item, checked: !checked };
      } else {
        return item;
      }
    });

    setTodos(noteIsDone);
  }

  function onDeleteClick(removeItemToId) {
    const newList = todos.filter((item) => item.id !== removeItemToId);

    setTodos(newList);
  }

  return (
    <ul className="list">
      {todos.map((item) => (
        <ListItem
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
}