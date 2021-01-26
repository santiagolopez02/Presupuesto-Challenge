import {
    SUCCESSFUL_REGISTRATION,
    ERROR_REGISTRATION,
    GET_USER,
    SUCCESSFUL_LOGIN,
    ERROR_LOGIN,
    LOG_OUT
} from '../../types/index'

const AuthReducer= (state, action)=>{

    //all case auth
    switch(action.type){
        //save jwtoken in localstorage
        case SUCCESSFUL_REGISTRATION:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                authenticated: true,
                message: null
            }
        //return error    
        case ERROR_REGISTRATION:
            return{
                ...state,
                token: null,
                message: action.payload
            }    
        default:
            return state;
    }
}

export default AuthReducer;