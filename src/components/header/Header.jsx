import MainTitle from "../main-title";
import Form from "../form";
import Buttons from "../buttons";

export default function Header({
  onAddTodos,
  value,
  onInputChange,
  list,
  setList,
}) {
  return (
    <header className="header">
      <div className="container">
        <MainTitle />
        <Form onSubmit={onAddTodos} todo={value} onChange={onInputChange} />
        <Buttons todos={list} setTodos={setList} />
      </div>
    </header>
  );
}
