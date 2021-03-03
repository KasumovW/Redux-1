import React from 'react';

function MainA(props) {
    return (
        <div>
            <div className="row">
                <div className="col-11 m-auto mt-2 mb-3 todo">
                    <div className="row">
                        <div className="col-1 check d-flex">
                            <input type="checkbox" checked={false}/>
                            <div className="line"></div>
                        </div>
                        <div className="col-9 text">
                            Загрузка данных...
                        </div>
                        <div className="col-2">
                            <button>Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainA;