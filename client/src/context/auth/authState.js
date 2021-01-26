import React, {useReducer} from 'react';
import AuthContext from './authContext'
import AuthReducer from './authReducer'
import {
    SUCCESSFUL_REGISTRATION,
    ERROR_REGISTRATION,
    GET_USER,
    SUCCESSFUL_LOGIN,
    ERROR_LOGIN,
    LOG_OUT
} from '../../types/index'


const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),    
        authenticated: null,
        user: null,
        message: null
    }

    const [ state, dispach] = useReducer(AuthReducer, initialState);

    //functions

    return(
        <AuthContext.Provider
            value= {{
                token: state.token,    
                authenticated: state.authenticated,
                user: state.user,
                message: state.message 
            }}
        >{props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;