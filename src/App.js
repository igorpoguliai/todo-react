import React, { useState } from "react";
import "./styles/reset.css";
import "./styles/styles.css";
import ListItem from "./components/ListItem";
import ListIdentifiers from "./components/ListIdentifiers";
import Header from "./components/header";

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  function onAddTodos(event) {
    event.preventDefault();

    if (value.trim() !== "") {
      const newNote = {
        note: value,
        checked: false,
        id: Math.random(),
        addetDate: new Date().toLocaleString().slice(0, -3),
      };

      setList([...list, newNote]);
      setValue("");
    }
  }

  function onCheckedClick(clickedItemId) {
    const noteIsDone = list.map((item) => {
      const { checked, id } = item;

      if (id === clickedItemId) {
        return { ...item, checked: !checked };
      } else {
        return item;
      }
    });

    setList(noteIsDone);
  }

  function onDeleteClick(removeItemToId) {
    const newList = list.filter((item) => item.id !== removeItemToId);

    setList(newList);
  }

  const identifiers = {
    all: list.length,
    todo: null,
    done: list.filter((item) => item.checked),
  };

  function onClick(label, value) {
    alert(`${label}: ${value}`);
  }

  return (
    <div className="App">
      <Header
        onAddTodos={onAddTodos}
        value={value}
        onInputChange={(event) => setValue(event.target.value)}
        list={list}
        setList={setList}
      />
      <main className="main">
        <div className="container">
          <ul className="list">
            {list.map((item) => (
              <ListItem
                checked={item.checked}
                id={item.id}
                note={item.note}
                addetDate={item.addetDate}
                onCheckedClick={onCheckedClick}
                onDeleteClick={onDeleteClick}
              />
            ))}
          </ul>
          <div className="block">
            <ListIdentifiers
              label="All"
              value={identifiers.all}
              onClick={onClick}
            />
            <ListIdentifiers
              label="Todo"
              value={identifiers.all - identifiers.done.length}
              onClick={onClick}
            />
            <ListIdentifiers
              label="Done"
              value={identifiers.done.length}
              onClick={onClick}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
