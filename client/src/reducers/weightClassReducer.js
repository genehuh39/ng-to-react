const weightClassReducer = (
    state = {
        isFetching: false,
        weightClasses: [],
    },
    action = {}
) => {
    switch (action.type) {
        case 'REQUEST_WEIGHT_CLASSES':
            return Object.assign({}, state, {
                isFetching: true,
            });
        case 'RECEIVE_WEIGHT_CLASSES':
            return Object.assign({}, state, {
                isFetching: false,
                fighters: action.weightClasses
            });
        default:
            return state;
    }
};

export default weightClassReducer;
