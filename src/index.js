import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";

import './index.css';
import App from './components/app/App';
import reducers from "./reducer";
import {Provider} from "react-redux";

const store = createStore(reducers);
window.store = store;


ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

