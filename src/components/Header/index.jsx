import { useState } from "react";
import MainTitle from "../MainTitle/index";
import Form from "../Form/index";
import Buttons from "../Buttons/index";
import { createId } from "../../helpers/randomId";

export default function Header({ list, setList }) {
  const [value, setValue] = useState("");

  function onAddTodos(event) {
    event.preventDefault();

    if (value.trim() !== "") {
      const newNote = {
        todo: value,
        checked: false,
        id: createId(),
        addetDate: new Date(),
      };

      setList([...list, newNote]);
      setValue("");
    }
  }

  return (
    <header className="header">
      <div className="container">
        <MainTitle />
        <Form
          onSubmit={onAddTodos}
          todo={value}
          onInputChange={(event) => setValue(event.target.value)}
        />
        <Buttons todos={list} setTodos={setList} />
      </div>
    </header>
  );
}
