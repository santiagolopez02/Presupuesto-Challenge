import React, {useReducer} from 'react';
import AuthContext from './authContext'
import AuthReducer from './authReducer'
import clientAxios from '../../config/axios'
import authToken from '../../config/authToken'
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

    //functions create record user
    const createUser = async data => {
        try {
            const response = await clientAxios.post('/user/register', data);
            console.log(response)
            const token = response.data
            dispach({
                type:SUCCESSFUL_REGISTRATION,
                payload: token
            });
            //auth token get user
            authUser(response);
        } catch (error) {
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

    //function get user auth
    const authUser = response => {
        const token = localStorage.getItem('token');
        if(token){
            //SEND TOKEN IN HEADERS
            authToken(token)
        }

        try {
            dispach({
                type:GET_USER,
                payload: response.data
            });
        } catch (error) {
            const alert = {
                msg: error.response.data.message,
                category: 'alerta-error'
            }
            dispach({
                type:ERROR_LOGIN,
                payload: alert
            });
        } 
    }

    //function logIn user 
    const logInUser = async data => {
        try {
            const response = await clientAxios.post('/user/login', data)
            const token = response.data
            console.log(response)
            //login succesfully
            dispach({
                type: SUCCESSFUL_LOGIN,
                payload: token
            })

            authUser(response)

        } catch (error) {
            const alert = {
                msg: error.response.data.message,
                category: 'alerta-error'
            }
            dispach({
                type:ERROR_LOGIN,
                payload: alert
            });
        }
    }

    //function log out user
    const userLogOut = () => {
        dispach({
            type: LOG_OUT
        })
    }
    return(
        <AuthContext.Provider
            value= {{
                token: state.token,    
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                authUser,
                createUser,
                logInUser,
                userLogOut
            }}
        >{props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;