import {useDispatch, useSelector} from "react-redux";


function App() {

  const bip = useSelector((state) => state);
  const dispach = useDispatch();
  const click = () => {
    dispach({
      type: "Зубайра"
    });
  };
  const click2 = () => {
    dispach({
      type: "Зубайра2"
    });
  };
  const click3 = () => {
    dispach({
      type: "Зубайра3"
    });
  };

  return (
    <div className="App">
      <div>{bip}</div>
      <button onClick={click}>Bip!</button>
      <button onClick={click2}>Bip2!</button>
      <button onClick={click3}>Bip3!</button>

    </div>
  );
}

export default App;