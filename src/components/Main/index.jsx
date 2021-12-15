import List from "../List/index";
import ListCounter from "../ListCounter/index";

export default function Main({ list, setList }) {
  const all = list.length;
  const todo = list.filter((item) => !item.checked).length;

  return (
    <main className="main">
      <div className="container">
        <List todos={list} setTodos={setList} />
        <div className="block">
          <ListCounter label={"All"} value={all} />
          <ListCounter label={"Todo"} value={todo} />
          <ListCounter label={"Done"} value={all - todo} />
        </div>
      </div>
    </main>
  );
}
