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
                newBudget: action.payload.newBudget
                
            }
        case UPDATE_RECORD:
            return{
                ...state,
                newBudget: action.payload.selectBudget 
            }
        case GET_RECORD: 
            return{
                ...state,
                budgetApi: action.payload
            }
        case DELETE_RECORD:
            console.log("id payload ", action.payload.id)
            return{
                ...state,
                budgetApi: state.budgetApi.filter(item => item.id !== action.payload.id)
            }
                      
        case ERROR_CREATE:
            return{
                ...state,
                message: action.payload.message
            }
        default:
            return state;
    }

}

export default BudgetReducer;