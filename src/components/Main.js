import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {dataCheck, dataDelete} from "../Redux/actions";
import Todo from "./Todo";

function Main(props) {
    const data = useSelector((state) => state.data);
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
                        item={item}
                        dataDeleted={dataDeleted}
                        dataChecking={dataChecking}
                    />
                )
            })}
        </div>
    );
}

export default Main;