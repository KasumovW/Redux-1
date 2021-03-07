import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {dataCheck, dataDelete} from "../redux/actions";
import Todo from "./Todo";

function Main(props) {
    const data = useSelector((state) => state.data);
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const dataDeleted = (id) => {
        dispatch(dataDelete(id));
    }
    const dataChecking = (id, completed) => {
        dispatch(dataCheck(id,completed))
    }


    return (
        <div>
            {data.map((item) => {
                return (
                    <Todo
                        item={data}
                        users={users}
                        dataDeleted={dataDeleted}
                        dataChecking={dataChecking}
                    />
                )
            })}
        </div>
    );
}

export default Main;