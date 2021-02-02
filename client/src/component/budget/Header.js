import React, {useContext, useState, useEffect} from 'react';

import BudgetContext from '../../context/records/budgetContext'
import AuthContext from '../../context/auth/authContext';



const Header = () => {
    //get value budget context
    const budgetContext = useContext(BudgetContext);
    const {budgetApi} = budgetContext

    //get value auth context
    const authContext = useContext(AuthContext);
    const {userLogOut} = authContext; 

    //calculate state initial
    const calculateOp = array =>{
        let totalIncome= 0
        let totalExpense = 0  
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if(element.type === "income"){
                totalIncome = totalIncome + element.amount
            }else if(element.type === "expenses"){
                totalExpense = totalExpense + element.amount
            }
            
        }

        let total = totalIncome - totalExpense;

        return total;
    }
    const total = calculateOp(budgetApi)
    //state initial
    const [value, setValue] = useState(total);

    useEffect(()=>{
        setValue(
            calculateOp(budgetApi)
        )
    }, []);

    return ( 
        <header className="container container-color container-header">
            <p className="subTitle">Welcome</p>

            <h1 className="title">Budget App</h1>
            <p className="text-total">Total <span>${total}</span></p>
            
            <nav>
                <button
                    className="btn"
                    onClick= {()=>userLogOut()}
                >
                    Log Out
                </button>
            </nav>
        </header>
     );
}
 
export default Header;