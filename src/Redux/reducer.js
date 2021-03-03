const iState = {
    data: [],
    loading: false
}
const reduser = (state = iState, action) => {
    switch (action.type) {
        case "app/loading/start":
            return {
                ...state,
                loading: true
            }

        case "app/loading/success":
            return  {
                data: action.payload
            }

        case "todo/deleting/start":
            return {
                data: state.data.map((item) => {
                    if (item.id === action.payload) {
                        return{
                            ...item,
                            deleting: true
                        }
                    } return item
                })
            }

        case "todo/deleting/success":
            return {
                data: state.data.filter((item) => {
                    return item.id !== action.payload;
                })
            }

        case "todo/check/start":
            return {
                ...state,
                data: state.data.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            checking: true
                        }
                    } return item

                })
            }

        case  "todo/check/success":
            return {
                data: state.data.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed,
                            checking: false
                        }
                    } return item;

                })
            }


        default:
            return state;
    }
};

export default reduser;