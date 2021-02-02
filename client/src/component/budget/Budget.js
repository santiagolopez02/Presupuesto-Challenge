import React, {useContext, useState, useRef} from 'react';


import BudgetContext from '../../context/records/budgetContext'
import AlertContext from '../../context/alert/alertContext'


const Budget = ({item}) => {
    //get value alert context
    const alertContext = useContext(AlertContext); 
    const { alert, showAlert} = alertContext;
    
    //get value budget context
    const budgetContext = useContext(BudgetContext);
    const { deleteRecord, getDataRecord, changedRecord } = budgetContext;

    //initial state
    const [record , setRecord ] = useState({
        concept : item.concept,
        amount : item.amount,
        date : item.date
    })

    //get value budget
    const { concept, amount, date } = record;

    
    //ref inputs virtual DOM
    const inputConcept = useRef(null)
    const inputAmount = useRef(null)
    const inputDate = useRef(null) 
    const btnSubmit = useRef(null)
    const btnChange = useRef(null)

    const onChange = e => {
        setRecord({
          concept: inputConcept.current.value,
          amount: inputAmount.current.value,
          date: inputDate.current.value
        })
    }
    //funtion to enable input
    const setChangeUpdate = () =>{     
        inputConcept.current.disabled = !inputConcept.current.disabled
        inputAmount.current.disabled = !inputAmount.current.disabled
        inputDate.current.disabled = !inputDate.current.disabled
        btnSubmit.current.className === "btn" ?  btnSubmit.current.className = "none" : btnSubmit.current.className = "btn" 
        btnChange.current.className === "none" ? btnChange.current.className ="btn" : btnChange.current.className ="none"

    }

    //function btn save change
    const onSubmit = e => {
        e.preventDefault();

        //check form
        //validate field input
        if(concept.trim() === ''|| amount === '' || date.trim() === ''){
            showAlert('All fields are required', 'alerta-error');
            return;
        }

        changedRecord(item.id, record)
        setChangeUpdate();
        getDataRecord();
    }

    //function btn delete
    const setChangeDelete = id => {
        deleteRecord(id)
        getDataRecord()
    }
    return ( 
        <li className="li-none"> 
            <form
                onSubmit= {onSubmit}
            >
                <div className="container">
                <label htmlFor="conceptR" className="text">Concept: </label>
                    <input
                        ref= {inputConcept}
                        name="conceptR"
                        type = "text"
                        value= {concept}
                        onChange={onChange}
                        disabled
                    />
                </div>
                <div className="container">
                <label htmlFor="amountR" className="text">Amount: </label>
                    <input
                        ref={inputAmount}
                        name="amountR"
                        type= "number"
                        value={amount}
                        onChange={onChange}
                        disabled
                    />
                </div>
                <div className="container">
                    <label htmlFor="dateR" className="text">Date: </label>
                    <input
                        ref={inputDate}
                        name="dateR"
                        type="text"
                        value={date}
                        onChange={onChange}
                        disabled
                    />
                </div>
                <div className="container">
                    <input
                        ref={btnSubmit}
                        type="submit"
                        value="Save Change"
                        className="none"
                    />
                    <button
                        ref={btnChange}
                        type="button"
                        onClick= {setChangeUpdate}
                        className="btn"
                    >Edit</button>
                    <button
                        className="btn"
                        type="button"
                        onClick= {()=>setChangeDelete(item.id)}
                    >Delete</button>
                </div>
            </form>
        </li>
     );
}
 
export default Budget;