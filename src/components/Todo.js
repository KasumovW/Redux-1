import React from 'react';

function Todo(props) {

    return (
        <div>
            <div className="row">
                <div className="col-11 m-auto mt-2 mb-3 todo">
                    <div className="row">
                        <div className="col-1 check d-flex">
                            {props.item.checking ? (
                                <div className="tire">

                                </div>
                            ) : (
                                <input
                                    type="checkbox"
                                    checked={props.item.completed}
                                    onChange={() => props.dataChecking(props.item.id)}
                                />
                            )}

                            <div className="line">

                            </div>
                        </div>
                        <div className="col-9 text">
                            {props.item.title} ({props.item.userId})
                        </div>
                        <div className="col-2">
                            <button
                                onClick={() => props.dataDeleted(props.item.id)}
                                disabled={props.item.deleting}
                            >Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todo;