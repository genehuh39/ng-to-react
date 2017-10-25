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
        case 'SELECT_FIGHTER':
            return Object.assign({}, state, {
                selectedFighter: action.payload
            });
        case 'DELETE_FIGHTER':
            return Object.assign({}, state, { fighters: state.fighters.filter((fighter) => fighter.id !== action.payload) });
        default:
            return state;
    }
};

export default fighterReducer;
