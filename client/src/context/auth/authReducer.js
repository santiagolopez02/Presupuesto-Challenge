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
        case SUCCESSFUL_LOGIN:
        case SUCCESSFUL_REGISTRATION:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                authenticated: true,
                message: null
            }
        //return error 
        case ERROR_LOGIN:       
        case ERROR_REGISTRATION:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                message: action.payload
            }  
        case GET_USER:
            return{
                ...state,
                token: action.payload.token,
                user: action.payload.newUser
            }      
        default:
            return state;
    }
}

export default AuthReducer;