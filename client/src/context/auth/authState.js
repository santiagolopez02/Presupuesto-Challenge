import React, {useReducer} from 'react';
import AuthContext from './authContext'
import AuthReducer from './authReducer'
import clientAxios from '../../config/axios'
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
    const createUser = async data => {
        try {
            const response = await clientAxios.post('/user/register', data);
            console.log(response.data)
            const token = response.data
            dispach({
                type:SUCCESSFUL_REGISTRATION,
                payload: token
            })
        } catch (error) {
            console.log(error.response)
            const alert = {
                msg: error.response.data.message,
                category: 'alerta-error'
            }
            dispach({
                type:ERROR_REGISTRATION,
                payload: alert
            })
        }
    }

    return(
        <AuthContext.Provider
            value= {{
                token: state.token,    
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                createUser 
            }}
        >{props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;