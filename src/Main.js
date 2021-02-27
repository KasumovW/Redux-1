import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {dataCheck, dataDelete} from "./actions";

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
                    <div className="row">
                        <div className="col-11 m-auto mt-2 mb-3 todo">
                            <div className="row">
                                <div className="col-1 check d-flex">
                                    {item.checking ? '-' : (
                                        <input
                                            type="checkbox"
                                            checked={item.completed}
                                            onChange={() => dataChecking(item.id)}
                                        />
                                    )}

                                    <div className="line"></div>
                                </div>
                                <div className="col-9 text">
                                    {item.title}
                                </div>
                                <div className="col-2">
                                    <button
                                        onClick={() => dataDeleted(item.id)}
                                        disabled={item.deleting}
                                    >Удалить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Main;