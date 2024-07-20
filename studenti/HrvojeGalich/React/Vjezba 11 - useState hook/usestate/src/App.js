import { useState } from "react";
import "./App.css";
import { UserFunctio, UserClass, UserChildren } from "./user";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Ivan",
      years: 30,
    },
    {
      name: "Marko",
      years: 25,
    },
    {
      name: "Ana",
      years: 25,
    },
  ]);

  const [childrenText, setChildrenText] = useState("plivanje");

  const btnClickHandler = () => {
    const newUsers = users.map((user) => {
      return { ...user, years: user.years + 1 };
    });
    setUsers(newUsers);
  };

  return (
    <div className="App">
      <h1>React Aplikacija</h1>
      <p>Ovo zaista radi!</p>
      <UserFunctio ime={users[0].name} godine={users[0].years} />
      <UserClass ime={users[1].name} godine={users[1].years} />
      <UserChildren ime={users[2].name} godine={users[2].years} fontSize="30px">
        plivanje
      </UserChildren>
      <UserChildren godine={users[2].years}>{childrenText}</UserChildren>
      <button onClick={btnClickHandler}>Promjena godina</button>
    </div>
  );
}

export default App;