import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeData} from "./actions";

function Forum(props) {
    const data = useSelector(state => state.data);
    const dispach = useDispatch();
    const nandleDelete = (id) => {
        dispach(removeData(id))
    }
    return (
        <div>
            {data.map((item) => {
                return (
                    <div className="row">
                        <div className="col-8 forum mt-3">
                            <div className="row justify-content-around textName pt-2 text-center m-auto">
                                <div className="col-1 mail">{item.id}</div>
                                <div className="col-3 id">{item.email}</div>
                                <div className="col-auto X" onClick={() => nandleDelete(data.id)}>X</div>
                            </div>
                            <div className="row">
                                <div className="col-6 text-center name m-auto">
                                    {item.name}
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