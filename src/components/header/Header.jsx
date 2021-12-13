import { useState } from "react";
import MainTitle from "../main-title";
import Form from "../form";
import Buttons from "../buttons";

export default function Header({ list, setList }) {
  const [value, setValue] = useState("");

  function onAddTodos(event) {
    event.preventDefault();

    if (value.trim() !== "") {
      const newNote = {
        todo: value,
        checked: false,
        id: Math.random(),
        addetDate: new Date().toLocaleString().slice(0, -3),
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
          onChange={(event) => setValue(event.target.value)}
        />
        <Buttons todos={list} setTodos={setList} />
      </div>
    </header>
  );
}
