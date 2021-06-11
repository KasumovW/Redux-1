import React from "react";
import { dataCheck, dataDelete } from "../redux/actions";
import { useDispatch } from "react-redux";

function Todo(props) {
  const dispatch = useDispatch();
  const dataDeleted = (id) => {
    dispatch(dataDelete(id));
  };
  const dataChecking = (id, completed) => {
    dispatch(dataCheck(id, completed));
  };

  const user = props.users.find((u) => {
    return u.id === props.data.userId;

  });

  return (
    <div>
      <div className="row">
        <div className="col-11 m-auto mt-2 mb-3 todo">
          <div className="row">
            <div className="col-1 check d-flex">
              {props.data.checking ? (
                <div className="tire" />
              ) : (
                <input
                  type="checkbox"
                  checked={props.data.completed}
                  onChange={() => dataChecking(props.data.id)}
                />
              )}

              <div className="line" />
            </div>
            <div className="col-9 text">{props.data.title}</div>
            <div className="col-2">
              <button
                onClick={() => dataDeleted(props.data.id)}
                disabled={props.data.deleting}
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
