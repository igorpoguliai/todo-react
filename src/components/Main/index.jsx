import List from "../List";
import ListIdentifiers from "../ListCounters";

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
