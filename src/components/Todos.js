import { useSelector } from "react-redux";
import Todo from "./Todo";

function Todos() {
  const data = useSelector((state) => state.data);
  const users = useSelector((state) => state.users);

  return (
    <div>
      {data.map((item) => {
        return <Todo users={users} data={item} />;
      })}
    </div>
  );
}

export default Todos;
