import React, { useState } from "react";
import "./styles/reset.css";
import "./styles/styles.css";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <Header list={list} setList={setList} />
      <Main list={list} setList={setList} />
    </div>
  );
}

export default App;
