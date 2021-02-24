export const addData = () => {
    return (dispatch) => {
        dispatch({
            type: 'load'
        })
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=50')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "addData",
                    payload: json
                })
            })
    }
};

export const removeData = (id) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/comments?_limit=50${id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'delete',
                    payload: id
                })
            })
    }
};