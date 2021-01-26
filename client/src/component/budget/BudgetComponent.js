import React, {Fragment} from 'react';
import Header from '../budget/Header';
import Form from '../budget/FormBudget';
import List from '../budget/ListBudget';

const BudgetComponent = () => {
    return ( 
        <Fragment>
            <Header/>
            <Form/>
            <List/>
        </Fragment>
     );
}
 
export default BudgetComponent;