import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";

const reduser = (state = 0, action) => {
    if (action.type === "Зубайра") {
        if (state < 10) {
            return (state + 1)
        };
    } if (action.type === "Зубайра2") {
        if (state > 0) {
            return (state - 1)
        };

    } if (action.type === "Зубайра3") {
        return (state = 0);
    } return (state);


};

const store = createStore(reduser);



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
