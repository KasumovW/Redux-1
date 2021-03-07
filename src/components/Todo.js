import React from 'react';

function Todo(props) {
    const user = props.users.find((item) => item.id === props.data.userId);
    return (
        <div>
            <div className="row">
                <div className="col-11 m-auto mt-2 mb-3 todo">
                    <div className="row">
                        <div className="col-1 check d-flex">
                            {props.data.checking ? (
                                <div className="tire">

                                </div>
                            ) : (
                                <input
                                    type="checkbox"
                                    checked={props.data.completed}
                                    onChange={() => props.dataChecking(props.data.id)}
                                />
                            )}

                            <div className="line">

                            </div>
                        </div>
                        <div className="col-9 text">
                            {props.data.title} ({user.email})
                        </div>
                        <div className="col-2">
                            <button
                                onClick={() => props.dataDeleted(props.data.id)}
                                disabled={props.data.deleting}
                            >Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todo;