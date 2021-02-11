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
  }

  return (
    <div className="App">
      <div>{bip}</div>
      <button onClick={click}>Bip!</button>
      <button onClick={click2}>Bip2!</button>
    </div>
  );
}

export default App;