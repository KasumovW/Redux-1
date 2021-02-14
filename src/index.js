import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import './style.css';

const reduser = (state = 0, action) => {
    switch (action.type) {
        case 5:
            return state + action.number;
        case 'Зубайра':
            return state + 1;
        case 'Зубайра2':
            return state - 1;
        default:
            return state;
    }
}
const store = createStore(reduser);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
