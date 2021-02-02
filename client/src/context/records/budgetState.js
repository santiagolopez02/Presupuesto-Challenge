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
        budgetSelect : null,
        newBudget: null,
        message: null
    }

    //use the hook reducer
    const  [state, dispach] = useReducer(BudgetReducer, initialState);

    //function create record 
    const createRecord = async data => {
        const token = localStorage.getItem('token');
        authToken(token);

        try {
            const response = await clientAxios.post('/budget', data)
            
            dispach({
                type:CREATE_RECORD,
                payload: response.data
            });
        } catch (error) {
            const alert = {
                msg: error.response.data.message,
                category: 'alerta-error'
            }
            dispach({
                type:ERROR_CREATE,
                payload: alert
            });
        }
    }

    //function to get 
    const getDataRecord = async () => {
        const token = localStorage.getItem('token');
        authToken(token);

        try {
            const response = await clientAxios.get("/budget");
            
            dispach({
                type: GET_RECORD,
                payload : response.data.arrayRecords
            })
        } catch (error) {
            const alert = {
                msg: error.response.data.message,
                category: 'alerta-error'
            }
            dispach({
                type:ERROR_CREATE,
                payload: alert
            });
            
        }
    }

    //function delete record
    const deleteRecord = async (id) => {
        const token = localStorage.getItem('token');
        authToken(token);
        
        try {
            const response = await clientAxios.delete(`/budget/${id}`)
           
            dispach({
                type: DELETE_RECORD,
                payload: response.data
            })
            
        } catch (error) {
            const alert = {
                msg: error.response.data.message,
                category: 'alerta-error'
            }
            dispach({
                type:ERROR_CREATE,
                payload: alert
            });
        }
    }

    //function to changed type
    const changedRecord = async (id, data) => {
        const token = localStorage.getItem('token');
        authToken(token);

        try {
            const response = await clientAxios.put(`/budget/${id}`, data)
            dispach({
                type: UPDATE_RECORD,
                payload : response.data
            })
        } catch (error) {
            const alert = {
                msg: error.response.data.message,
                category: 'alerta-error'
            }
            dispach({
                type:ERROR_CREATE,
                payload: alert
            });         
        }
    }

    return(
        <BudgetContext.Provider
            value={{
                budgetApi: state.budgetApi,
                budgetSelect: state.budgetSelect,
                error: state.error,
                newBudget: state.newBudget,
                message: state.message,
                createRecord,
                getDataRecord,
                deleteRecord,
                changedRecord
            }}
        >
            {props.children}
        </BudgetContext.Provider>
    )
}

export default BudgetState;