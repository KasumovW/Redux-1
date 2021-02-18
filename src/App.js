import {useState} from "react";
import {useEffect} from "react";


function App() {
   const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
               return  response.json()
            })
            .then((arr) => {
                setData(arr)
                setLoading(false)
            })
    }, [])

    return (
        <div className='golova'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center cText'>
                        Список дел:
                    </div>
                    {loading ? (
                        <div className='col-12 mt-5 text-center m2Text'>Идет загрузка данных с сервера...</div>
                    ) : data.map((item) => {
                            if (item.completed === true) {
                                return (
                                    <div className='col-12 mText'>
                                        <div className='id'>
                                            Дело-{item.id}:
                                        </div>
                                        <div className='todo'>
                                            {item.title}
                                        </div>
                                    </div>
                                )
                            }
                        }) }
                </div>
            </div>
        </div>
    );
}

export default App;