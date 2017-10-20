import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import fighter from './reducers/fighterReducer';


const loggerMiddleware = createLogger();

export default createStore(
    fighter,
    {},
    applyMiddleware(loggerMiddleware,thunkMiddleware)
);
