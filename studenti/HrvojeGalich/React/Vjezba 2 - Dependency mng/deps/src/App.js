import logo from "./logo.svg";
import "./App.css";
import randomstring from "randomstring";

function App() {
  //const rnd = randomstring.generate();

  return (
    <div className="App">
      <p>Moj random string: {randomstring.generate(5)}</p>
    </div>
  );
}

export default App;
