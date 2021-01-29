import React, { useReducer} from 'react';
import BudgetContext from './budgetContext';
import BudgetReducer from './budgetReducer';
import clientAxios from '../../config/axios'
import authToken from '../../config/authToken'
import {
    CREATE_RECORD,
    ERROR_CREATE, 
    DELETE_RECORD,
    UPDATE_RECORD,
    GET_RECORD 
} from '../../types/index'

const BudgetState = (props) => {
    //initial state 
    const initialState = {
        budgetApi : [],
        error: null,
        budgetSelect : null
    }

    //use the hook reducer
    const  [state, dispach] = useReducer(BudgetReducer, initialState);

    //function create record 
    const createRecord = async data => {
        const token = localStorage.getItem('token');
        authToken(token);

        try {
            const response = await clientAxios.post('/budget', data)
            console.log(response);
            
            //dispach({
            //    type:CREATE_RECORD,
            //    payload: response.data
            //});
        } catch (error) {
            console.log(error.response)
            dispach({
                type:ERROR_CREATE,
                
            });
        }
    }

    return(
        <BudgetContext.Provider
            value={{
                budgetApi: state.budgetApi,
                budgetSelect: state.budgetSelect,
                error: state.error,
                createRecord
            }}
        >
            {props.children}
        </BudgetContext.Provider>
    )
}

export default BudgetState;