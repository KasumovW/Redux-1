export const addData = () => {
    return (dispatch) => {
        dispatch({
            type: 'load'
        })
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=50')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "addData",
                    payload: json
                })
            })
    }
};

export const dataRemove = (id) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/comments?_limit=50${id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then(json => {
                dispatch({
                    type: 'delete',
                    payload: id
                })
        })
    }

};

export const checkUse = (id, completed) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/comments?_limit=50${id}`, {
            method: 'PATCH',
            body: JSON.stringify({completed: !completed}),
            headers: {"content-type": "application/json"}
        })
            .then((response) => response.json())
            .then(json => {
                dispatch({
                    type: 'create',
                    payload: id
                })
            })
    }
}
