export default function allorderReducer(state = {}, action) {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'getInformation':
            newState.status = 1;
            newState.response = action.response;
            break;
    }
    return newState;
}