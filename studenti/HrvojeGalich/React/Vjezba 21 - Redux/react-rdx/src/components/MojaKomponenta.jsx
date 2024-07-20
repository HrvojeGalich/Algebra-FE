import { useSelector } from "react-redux";
function MojaKomponenta() {
  const brojac = useSelector((sk1) => sk1.counter);
  return (
    <>
      <h2>Moja komponenta</h2>
      <p>I moja komponenta koristi redux store: {brojac}</p>
    </>
  );
}

export default MojaKomponenta;
