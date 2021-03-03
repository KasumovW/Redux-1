import Header from "./Header";
import Main from "./Main";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addData} from "../Redux/actions";
import HeaderA from "./HeaderA";
import MainA from "./MainA";

function App() {
    const loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(addData())
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
                </>
            )}
        </div>
        </div>
    );
}

export default App;