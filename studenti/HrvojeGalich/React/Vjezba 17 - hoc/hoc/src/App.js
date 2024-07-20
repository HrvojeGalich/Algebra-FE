import "./App.css";

function Button(props) {
  return <button {...props}></button>;
}

function widthColor(Element) {
  return function ({ boja, ...otherProps }) {
    return <Element {...otherProps} style={{ background: boja }} />;
  };
}

const ColoredButton = widthColor(Button);

function clickHandler() {
  alert("Kliknuo");
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Button>Moj button</Button>
      <ColoredButton boja="red">Bok, ja sam crveni</ColoredButton>
      <ColoredButton boja="yellow">Bok, ja sam žuti</ColoredButton>
      <ColoredButton boja="green" onClick={clickHandler}>
        Bok, ja sam zelen
      </ColoredButton>
    </div>
  );
}

export default App;
