export const addData = () => {
    return function (dispatch) {
        dispatch({ type: "loading"})
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then((response) => response.json())
            .then(json => {
                dispatch({
                    type: 'add',
                    payload: json
                })
            })

    }
};

export const dataDelete = (id) => {
    return function (dispatch) {
        dispatch({type: "todo_deleting_disabled", payload: id})
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {
            method: "DELETE"
        })
            .then((response) => response.json())
            .then(json => {
                dispatch({
                    type: 'todo_deleting',
                    payload: id
                })
            })
    }
}

export const dataCheck = (id, completed) => {
    return function (dispatch) {
        dispatch({type: "check_disabled", payload: id})

        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {
            method: "PATCH",
            body: JSON.stringify({completed: !completed}),
            headers: {"content-type": "application/json"}
        })
            .then((response) => response.json())
            .then(() => {
                dispatch({
                    type: 'todo_checking',
                    payload: id
                })
            })

    }
}
