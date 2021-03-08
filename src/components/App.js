import Header from "./Header";
import Main from "./Main";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addData, loadUsers} from "../redux/actions";
import HeaderA from "./HeaderA";
import MainA from "./MainA";
import Homework from "./Homework";

function App() {
    const loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(addData())
        dispatch(loadUsers())
    }, [])


    return (
        <div className="acc">
        <div className='container obsh'>
            {loading ? (
                <>
                    <HeaderA />
                    <MainA />
                </>
            ) : (
                <>
                    <Header />
                    <Main />
                    <Homework />
                </>
            )}
        </div>
        </div>
    );
}

export default App;