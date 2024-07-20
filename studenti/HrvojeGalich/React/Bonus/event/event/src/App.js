import React, { useState } from "react";
import "./App.css";

function Child({ title, onBtnclick }) {
  let msg = "Goodbye!";

  return (
    <>
      <h2>Child: {title}</h2>
      <button onClick={() => onBtnclick(msg)}>Promijeni Parent</button>
    </>
  );
}

function Parent() {
  const [message, setMessage] = useState("Hello World");

  function btnClickHandler(newMessage) {
    setMessage(newMessage);
  }

  return (
    <>
      <h2>Parent: {message}</h2>
      <Child title="Moje dijete" onBtnclick={btnClickHandler} />
    </>
  );
}

function App() {
  const [counter, setCounter] = useState(0);

  function buttonClickHandler() {
    setCounter((prethdnoStanje) => prethdnoStanje + 1);
    setCounter((prethdnoStanje) => prethdnoStanje + 1);
    setCounter((prethdnoStanje) => prethdnoStanje + 1);
    setCounter((prethdnoStanje) => prethdnoStanje + 1);
  }

  return (
    <div className="App">
      <p>Brojač: {counter}</p>
      <button onClick={buttonClickHandler}>Uvečaj brojač</button>
      <Parent></Parent>
    </div>
  );
}

export default App;
