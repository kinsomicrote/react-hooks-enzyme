import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
