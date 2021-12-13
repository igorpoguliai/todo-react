import List from "../list";
import ListIdentifiers from "../list-identifiers";

export default function Main({ list, setList }) {
  return (
    <main className="main">
      <div className="container">
        <List todos={list} setTodos={setList} />
        <ListIdentifiers todos={list} />
      </div>
    </main>
  );
}
