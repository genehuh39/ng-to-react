import fetch from 'isomorphic-fetch';

function receiveWeightClasses(json) {
    return {
        type: 'RECEIVE_WEIGHT_CLASSES',
        weightClasses: json,
        received: Date.now()
    };
}

function requestWeightClasses() {
    return {
        type: 'REQUEST_WEIGHT_CLASSES'
    };
}

export function fetchWeightClasses() {

    return dispatch => {
        dispatch(requestWeightClasses());
        return fetch('/weight_classes')
            .then(response =>  response.json())
            .then(json => dispatch(receiveWeightClasses(json)));
    };

}