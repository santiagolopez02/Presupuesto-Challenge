import React, {useState, useContext, useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext'
import BudgetContext from '../../context/records/budgetContext'


const FormBudget = () => {
    //get value alert context
    const alertContext = useContext(AlertContext); 
    const { alert, showAlert} = alertContext;


    //get value budget context
    const budgetContext = useContext(BudgetContext);
    const {createRecord, getDataRecord} = budgetContext

    const initialBudget= {
        concept:"",
        amount:"",
        date:"",
        type:""
    }

    //state initial
    const [budget, setBudget]  = useState(initialBudget);

    //get value budget
    const { concept, amount, date, type } = budget;

    //get value input
    const onChange = e =>{
        e.preventDefault();
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

        //reset form
        setBudget(initialBudget)

        //getDataRecord
        getDataRecord()
    } 
    return ( 
        <form
            onSubmit={onSubmit}
        >
            <h2 className="subTitle">Create Record</h2>
            <div className="container">
                <label htmlFor="concept" className="text">Concept: </label>
                <input
                    type="text"
                    name="concept"
                    id="concept"
                    onChange={onChange}
                    value= {budget.concept}
                />
            </div>
            <div className="container">
                <label htmlFor="amount" className="text">Amount: </label>
                <input
                    type="number"
                    name="amount"
                    id="amount"
                    onChange={onChange}
                    value= {budget.amount}
                />
            </div>
            <div className="container">
                <label htmlFor="date" className="text">Date: </label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    onChange={onChange}
                    value= {budget.date}
                />
                
            </div>
            <div className="container">
                <label htmlFor="type" className="text">Type: </label>
                <select
                    onChange={onChange}
                    name="type"
                    value= {budget.type}
                >
                    <option value="">--Select type--</option>
                    <option value="income">INCOME</option>
                    <option value="expenses">EXPENSE</option>
                </select>
            </div>
            <div className="container">
                 <input 
                 className="btn"
                 type="submit" 
                 value ="Create"
                 /> 
            </div>                                    
        </form>
     );
}
 
export default FormBudget;