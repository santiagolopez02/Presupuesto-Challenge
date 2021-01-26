import React, {Fragment} from 'react';
import Budget from './Budget'


const ListBudget = () => {
    return ( 
        <Fragment>
            <div>
                <h2>Income</h2>
                <Budget/>
            </div>
            <div>
                <h2>Expenses</h2>
                <Budget/>
            </div>
        </Fragment>
     );
}
 
export default ListBudget;