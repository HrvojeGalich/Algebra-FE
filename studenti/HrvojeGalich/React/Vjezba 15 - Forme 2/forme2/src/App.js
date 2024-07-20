import React from "react";
import "./App.css";
import { User, NewUsers } from "./user";

class App extends React.Component {
  state = {
    users: [
      {
        id: "1",
        name: "Ivan",
        years: 30,
      },
      {
        id: "2",
        name: "Marko",
        years: 25,
      },
      {
        id: "3",
        name: "Ana",
        years: 25,
      },
    ],
  };

  btnClickHandler = () => {
    const newUsers = this.state.users.map((user) => {
      return { ...user, years: user.years + 1 };
    });
    this.setState({ users: newUsers });
  };

  addUserHandrel = ({ name, age }) => {
    const { users } = this.state;
    const newUser = {
      id: `${name}_${new Date().getTime()}`,
      name: name,
      years: age,
    };
    const newUsers = [...users, newUser];
    this.setState({ users: newUsers });
  };

  nameChangeHandler = (event, index) => {
    const { users } = this.state;
    const newUsers = [...users];
    newUsers[index].name = event.target.value;
    this.setState({ user: newUsers });
  };

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <h1>React Aplikacija</h1>
        <p>Ovo zaista radi!</p>
        <button onClick={this.btnClickHandler}>Promjena godina</button>
        {users.map((user, index) => (
          <User
            key={user.id}
            ime={user.name}
            godine={user.years}
            onNameChange={(event) => this.nameChangeHandler(event, index)}
          />
        ))}
        <hr />
        <NewUsers onAddUser={this.addUserHandrel} />
      </div>
    );
  }
}

export default App;
