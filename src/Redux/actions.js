export const addData = () => {
    return function (dispatch) {
        dispatch({ type:"app/loading/start"})
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then((response) => response.json())
            .then(json => {
                dispatch({
                    type: 'app/loading/success',
                    payload: json
                })
            })

    }
};

export const dataDelete = (id) => {
    return function (dispatch) {
        dispatch({type: "todo/deleting/start", payload: id})
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {
            method: "DELETE"
        })
            .then((response) => response.json())
            .then(json => {
                dispatch({
                    type: 'todo/deleting/success',
                    payload: id
                })
            })
    }
}

export const dataCheck = (id, completed) => {
    return function (dispatch) {
        dispatch({type: "todo/check/start", payload: id})

        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {
            method: "PATCH",
            body: JSON.stringify({completed: !completed}),
            headers: {"content-type": "application/json"}
        })
            .then((response) => response.json())
            .then(() => {
                dispatch({
                    type: 'todo/check/success',
                    payload: id
                })
            })

    }
}
