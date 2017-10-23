const fighterReducer = (
    state = {
        isFetching: false,
        selectedFighter: null,
        fighters: [],
    },
    action = {}
) => {
    switch (action.type) {
        case 'REQUEST_FIGHTERS':
            return Object.assign({}, state, {
                isFetching: true,
            });
        case 'RECEIVE_FIGHTERS':
            return Object.assign({}, state, {
                isFetching: false,
                fighters: action.fighters,
                lastUpdated: action.received,
            });
        default:
            return state;
    }
};

export default fighterReducer;
