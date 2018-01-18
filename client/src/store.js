import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import fighter from './reducers/fighterReducer';
import weightClasses from './reducers/weightClassReducer';


const loggerMiddleware = createLogger();
const initialState = {
    isFetching: false,
    selectedFighter: null,
    fighters: [],
    weightClasses: []
};

export default createStore(
    combineReducers({
        fighter,
        weightClasses
    }),
    initialState,
    applyMiddleware(loggerMiddleware, thunkMiddleware)
);
