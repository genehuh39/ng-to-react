let initialState  = {
    isFetching: false,
    fighters: []
};

const fighterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REQUEST_FIGHTERS':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'RECEIVE_FIGHTERS':
            return Object.assign({}, state, {
                isFetching: false,
                fighters: action.fighters,
                lastUpdated: action.received
            });
        default:
            return state
    }
};

export default fighterReducer;