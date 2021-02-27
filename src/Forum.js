import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createCheck, dataRemove} from "./actions";

function Forum(props) {
    const data = useSelector(state => state.data);
    const dispach = useDispatch();
    const handleDelete = (id) => {
        dispach(dataRemove(id))
    }
    const handleCheck = (id, completed) => {
        dispach(createCheck(id, completed))
    }

    return (
        <div>
            {data.map((item) => {
                return (
                    <div className="row">
                        <div className="col-8 forum mt-3">
                            <div className="row justify-content-around textName pt-2 text-center m-auto">
                                <div className="col-1 mail">{item.id}</div>
                                <div className="col-3 id">{item.title}</div>
                                <button className="col-auto X"
                                     onClick={() => handleDelete(item.id)}
                                     disabled={item.spin}
                                >X</button>
                            </div>
                            <div className="row">
                                <div className="col-6 text-center name m-auto">
                                    {item.cheking ? '-' : (
                                        <input
                                            type="checkbox"
                                            checked={item.completed}
                                            onChange={() => handleCheck(item.id)}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Forum;