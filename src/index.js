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
};
const reducer = (state = iState, action) => {
    switch (action.type) {
        case 'addData':
            return {
                data: action.payload
            };

        case 'spining_delete':
            return {
                data: state.data.map((item) => {
                    if (item.id === action.payload) {
                        return{
                            ...item,
                            spin: true
                        }
                    } return item

                })
            }

        case 'delete':
            return {
                data: state.data.filter((item) => {
                    return item.id !== action.payload;
                })
            };

        case 'load':
            return {
                loading: true
            };

        case 'chek_spin':
            return {
                data: state.data.map((item) => {
                    if (item.id === action.payload) {
                        return{
                            ...item,
                            cheking: true
                        }
                    } return item
                })
            }

        case 'check':
            return {
                data: state.data.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed,
                            cheking: false

                        }
                    }

                    return item;
                })
            };

        default:
            return state;
    }
}
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);