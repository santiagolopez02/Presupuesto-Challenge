import React, {useReducer} from 'react';
import AlertReducer from './alertReducer';
import AlertContext from './alertContext';
import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../../types/index'


const AlertState = props => {
    const initialState = {
        alert : null
    }
    
    const [ state, dispach] = useReducer(AlertReducer, initialState);

    //function

    const showAlert = (msg, category) => {
        dispach({
            type: SHOW_ALERT,
            payload: {
                msg: msg,
                category: category
            }
        });

        setTimeout(()=>{
            dispach({
                type: HIDE_ALERT
                });
        }, 5000)
    }
    return(
        <AlertContext.Provider
            value={{
                alert : state.alert,
                showAlert
            }}
        >{props.children}

        </AlertContext.Provider>
    )
}

export default AlertState;