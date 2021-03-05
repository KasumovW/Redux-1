import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {dataCheck, dataDelete, userData} from "../Redux/actions";
import Todo from "./Todo";
import {useEffect} from "react";

function Main(props) {
    const data = useSelector((state) => state.data);
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const user = users.filter(item => {
        if (item.id === data.userId) {
            return true
        }

        return false
    });

    const dataDeleted = (id) => {
        dispatch(dataDelete(id));
    }
    const dataChecking = (id, completed) => {
        dispatch(dataCheck(id,completed))
    }
        useEffect(() => {
            dispatch(userData())
        }, []);
    return (
        <div>
            {data.map((item) => {
                return (
                    <Todo
                        item={item}
                        dataDeleted={dataDeleted}
                        dataChecking={dataChecking}
                        users={users}
                    />
                )
            })}
        </div>
    );
}

export default Main;