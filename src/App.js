import {useDispatch, useSelector} from "react-redux";
import {addNumber, minusOne, plusOne} from "./actions";
import {useState} from "react";

function App() {
    const [chislo, setChislo] = useState('');
    const dispach = useDispatch();
    const Conclusion = useSelector((state) => state);
    const handlePlus = () => {
        dispach(plusOne())
    }
    const handleMinus = () => {
        dispach(minusOne())
    }
    const handleAdd = () => {
        dispach(addNumber(chislo))
    }
    return (
        <div className='golova'>
            <div>{Conclusion}</div>
            <button onClick={handlePlus}>Плюс</button>
            <button onClick={handleMinus}>Минус</button>
            <input
                type='number'
                placeholder='Введите число...'
                value={chislo}
                onChange={(event) => setChislo(event.target.value)}
            />
            <button onClick={handleAdd}>Добавить число</button>
        </div>
    );
}

export default App;