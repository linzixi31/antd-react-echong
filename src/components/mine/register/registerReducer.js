export default function RegisterReducer(state = {}, action){
    var registerState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'regidterbeforeRequest':
            registerState.status = 0;
            break;
        case 'registerRequested':
            registerState.status = 1;
            registerState.response = action.response;
            break;
        case 'registerRequestError':
            registerState.status = -1;
            registerState.error = action.error;
            break;
    }

    return registerState;
}