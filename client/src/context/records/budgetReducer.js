import {
    CREATE_RECORD,
    ERROR_CREATE, 
    DELETE_RECORD,
    UPDATE_RECORD,
    GET_RECORD 
} from '../../types/index'


const BudgetReducer = (state, action ) => {
    switch(action.type){
        case CREATE_RECORD:
            return{
                ...state,
                
            }
        default:
            return state;
    }

}

export default BudgetReducer;