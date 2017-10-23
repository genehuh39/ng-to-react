import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import fighter from './reducers/fighterReducer';


const loggerMiddleware = createLogger();
const initialState = {
    isFetching: false,
    selectedFighter: null,
    fighters: [],
};

export default createStore(
    fighter,
    initialState,
    applyMiddleware(loggerMiddleware, thunkMiddleware)
);
