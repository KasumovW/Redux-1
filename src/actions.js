export const gettingData = (dispach) => {
    return function (dispach) {
        dispach({type: 'a1'})
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                dispach({
                    type:"asd",
                    payload: json
                })
            })
    }
};