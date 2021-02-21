import {useDispatch, useSelector} from "react-redux";
import {gettingData} from "./actions";
import {useEffect} from "react";

function App() {

const data = useSelector(state => state.data);
const load = useSelector(state => state.loading);
const dispach = useDispatch();

useEffect(() => {
    dispach(gettingData());
}, []);



return (
        <div className='golova'>
            {load ? (
                <div className='container'>
                    <div className="row mt-3">
                        <div className="col-12 m-auto text-center header">
                            Загрузка данных...
                        </div>
                    </div>
                    <div className="row justify-content-between mt-4">
                        <div className="col-8 main text-center">Идет загрузка...</div>
                        <div className="col-3 sidebar text-center">И тут тоже...</div>
                    </div>
                    <div className="row mt-4 mb-3">
                        <div className="col-12 footer text-center">
                            И тут...
                        </div>
                    </div>
                </div>
            ) : (
                <div className='container'>
                    <div className="row mt-3">
                        <div className="col-12 m-auto text-center header">
                            Header
                        </div>
                    </div>
                    <div className="row justify-content-between mt-4">
                        <div className="col-8 main text-center">
                            {data.map((item) => {
                                if (item.id < 20) {
                                    return item.body
                                } return false;
                            })}
                        </div>
                        <div className="col-3 sidebar text-center">
                            {data.map((item) => {
                                if (item.id < 25) {
                                    return item.title
                                } return false;
                            })}
                        </div>
                    </div>
                    <div className="row mt-4 mb-3">
                        <div className="col-12 footer text-center">
                            Все!
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;