import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Header from "./Header";
import MainImg from "./MainImg";
import Forum from "./Forum";
import {addData} from "./actions";
import HeaderA from "./HeaderA";
import MainImgA from "./MainImgA";
import ForumA from "./ForumA";

function App() {
    const data = useSelector(state => state.data);
    const loading = useSelector(state => state.loading);
    const dispach = useDispatch();
    useEffect(() => {
        dispach(addData());
    }, []);

    return (
        <div className='container'>
            {loading ? (
                <>
                <HeaderA/>
                <MainImgA/>
                <ForumA/>
                </>
            ) : (
                <>
                <Header/>
                <MainImg/>
                <Forum/>
                </>
            )}
        </div>
    );
}

export default App;