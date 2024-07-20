/* import React from "react"; */
import "./App.css";
import { WelcomeFuction, WelcomeClass } from "./components";

/* function WelcomeFuction() {
  return <h2>Wecome! Komponenta defirirana funkcijom</h2>;
} */

/* class WelcomeClass extends React.Component {
  render() {
    return <h2>Welcome! Komponenta definirana klasom</h2>;
  }
} */

function App() {
  return (
    <div className="App">
      <WelcomeFuction />
      <WelcomeClass />
    </div>
  );
}

export default App;
