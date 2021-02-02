import React, {Fragment, useContext, useState, useEffect} from 'react';
import Budget from './Budget'

import AlertContext from '../../context/alert/alertContext'
import BudgetContext from '../../context/records/budgetContext'


const ListBudget = () => {
    //get value alert context
    const alertContext = useContext(AlertContext); 
    const { alert, showAlert} = alertContext;


    //get value budget context
    const budgetContext = useContext(BudgetContext);
    const { budgetApi, getDataRecord } = budgetContext;


    useEffect(() => {
        getDataRecord()
    }, []);  

    return ( 
        <Fragment>
            <div>
                <h2 className="subTitle">Income</h2>
                
                    { budgetApi.map(item =>{
                            if(item.type === "income"){ 
                                return <Budget
                                    key= {item.id}
                                    item= {item}
                                />
                            }
                        })
                    }
                
                
            </div>
            <div>
                <h2 className="subTitle">Expenses</h2>
                 
                    { budgetApi.map(item =>{
                            if(item.type === "expenses"){
                                return <Budget
                                    key= {item.id}
                                    item= {item}
                                />
                            }
                        })
                    }
                
            </div>
        </Fragment>
     );
}
 
export default ListBudget;