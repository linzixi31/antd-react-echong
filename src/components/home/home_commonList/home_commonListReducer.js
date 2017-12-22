export default function home_commonListReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'Requested':
            newState.status = 1;
            newState.response = action.response;
            break;
    }

    return newState;
}