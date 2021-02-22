export const addData = () => {
    return (dispach) => {
        dispach({
            type: 'load'
        })
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=50')
            .then(response => response.json())
            .then(json => {
                dispach({
                    type: "addData",
                    payload: json
                })
            })
    }
}