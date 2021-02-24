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