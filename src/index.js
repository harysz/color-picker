import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './AppRoutes';
import 'normalize.css';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import colorReducer from './reducer/colorReducer';

const rootReducer = combineReducers(
    {
        colors: colorReducer
    }
);
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
