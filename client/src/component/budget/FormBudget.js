import React from 'react';


const FormBudget = () => {
    return ( 
        <form>
            <div>
                <label htmlFor="concept">Concept: </label>
                <input
                    type="text"
                    name="concept"
                    id="concept"
                />
            </div>
            <div>
                <label htmlFor="amount">Amount: </label>
                <input
                    type="number"
                    name="amount"
                    id="amount"
                />
            </div>
            <div>
                <label htmlFor="date">Date: </label>
                <input
                    type="text"
                    name="date"
                    id="date"
                />
                
            </div>
            <div>
                <label htmlFor="type">Type: </label>
                <input
                    type="text"
                    name="type"
                    id="type"
                />
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