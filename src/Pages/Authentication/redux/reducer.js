import {CREDENTIALS_SAVING, NAME} from "./constants";


const initialAuthenticationState={
    username:null,
    password:null

}

const authenticationReducer=(state = initialAuthenticationState, action)=> {
    switch (action.type) {
        case CREDENTIALS_SAVING:
            return {...state,...action.payload}
        default:
            return {...state}
    }
};
const reducerWrapper = {
    [NAME]:authenticationReducer
};
export { initialAuthenticationState, authenticationReducer };

export default reducerWrapper;
