import React, {useState, useContext, useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext'
import BudgetContext from '../../context/records/budgetContext'


const FormBudget = () => {
    //get value alert context
    const alertContext = useContext(AlertContext); 
    const { alert, showAlert} = alertContext;


    //get value budget context
    const budgetContext = useContext(BudgetContext);
    const {createRecord} = budgetContext

    //state initial
    const [budget, setBudget]  = useState({
        concept:"",
        amount:"",
        date:"",
        type:""
    });

    //get value budget
    const { concept, amount, date, type } = budget;

    //get value input
    const onChange = e =>{
        setBudget({
            ...budget,
            [e.target.name] : e.target.value
        })
    }

    //function submit form
    const onSubmit = e => {
        e.preventDefault();

        //check form
        //validate field input
        if(concept.trim() === ''|| amount.trim() === '' || date.trim() === '' || type === ''){
            showAlert('All fields are required', 'alerta-error');
            return;
        }

        //call function create record
        createRecord(budget);
    } 
    return ( 
        <form
            onSubmit={onSubmit}
        >
            <div>
                <label htmlFor="concept">Concept: </label>
                <input
                    type="text"
                    name="concept"
                    id="concept"
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="amount">Amount: </label>
                <input
                    type="number"
                    name="amount"
                    id="amount"
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="date">Date: </label>
                <input
                    type="text"
                    name="date"
                    id="date"
                    onChange={onChange}
                />
                
            </div>
            <div>
                <label htmlFor="type">Type: </label>
                <select
                    onChange={onChange}
                    name="type"
                >
                    <option value="">--Select type--</option>
                    <option value="income">INCOME</option>
                    <option value="expenses">EXPENSE</option>
                </select>
            </div>
            <div>
                 <input 
                 type="submit" 
                 value ="Create"
                 /> 
            </div>                                    
        </form>
     );
}
 
export default FormBudget;