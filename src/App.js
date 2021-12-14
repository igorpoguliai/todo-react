import React, { useState } from "react";
import "./styles/reset.css";
import "./styles/styles.scss";
import Header from "./components/Header/index";
import Main from "./components/Main";

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
