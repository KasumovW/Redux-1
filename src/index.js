import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style.css';
import {Provider} from "react-redux";
import store from "./Redux";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);