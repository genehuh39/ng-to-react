import fetch from 'isomorphic-fetch';

function receiveFighters(json) {
    return {
        type: 'RECEIVE_FIGHTERS',
        fighters: json,
        received: Date.now()
    };
}

function requestFighters() {
    return {
         type: 'REQUEST_FIGHTERS'
    };
}

export function addFighter(fighter) {
    return {
        type: "ADD_FIGHTER",
        payload: fighter
    };
}

export function deleteFighter(id) {
    return {
        type: "DELETE_FIGHTER",
        payload: id
    };
}

export function fetchFighters() {

    return dispatch => {
      dispatch(requestFighters());
      return fetch('/fighters')
          .then(response =>  response.json())
          .then(json => dispatch(receiveFighters(json)));
    };

}