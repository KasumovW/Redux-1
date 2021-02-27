import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const iState = {
    data: [],
    loading: false
}
const reduser = (state = iState, action) => {
    switch (action.type) {
        case "loading":
            return {
                ...state,
                loading: true
            }

        case "add":
            return  {
            data: action.payload
        }

        case "todo_deleting_disabled":
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

        case "todo_deleting":
            return {
                data: state.data.filter((item) => {
                    return item.id !== action.payload;
                })
            }

        case "check_disabled":
            return {
                data: state.data.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            checking: true
                        }
                    } return item

                })
            }

        case  "todo_checking":
            return {
                data: state.data.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            check: !item.completed,
                            checking: false
                        }
                    } return item;

                })
            }


        default:
            return state;
    }
}
const store = createStore(reduser, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);