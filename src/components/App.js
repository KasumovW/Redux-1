import Header from "./Header";
import Todos from "./Todos";
import { useDispatch, useSelector } from "react-redux";
import HeaderA from "./HeaderA";
import MainA from "./MainA";
import { useEffect } from "react";
import { addData, loadUsers } from "../redux/actions";

function App() {
  const loading = useSelector((state) => state.loading);
  const uLoading = useSelector((state) => state.usersLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addData());
    dispatch(loadUsers());
  }, []);

  return (
    <div className="acc">
      <div className="container obsh">
        {loading || uLoading ? (
          <>
            <HeaderA />
            <MainA />
          </>
        ) : (
          <>
            <Header />
            <Todos />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
