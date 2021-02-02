import React, {Fragment, useContext} from 'react';
import Header from '../budget/Header';
import Form from '../budget/FormBudget';
import List from '../budget/ListBudget';

import AlertContext from '../../context/alert/alertContext'

const BudgetComponent = () => {
    //get value alert context
    const alertContext = useContext(AlertContext); 
    const { alert, showAlert} = alertContext;

    return ( 
        <Fragment>
            <Header/>
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="container-components">
                <Form/>
                <List/>
            </div>
        </Fragment>
     );
}
 
export default BudgetComponent;