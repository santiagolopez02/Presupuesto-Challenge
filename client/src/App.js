import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LogIn from './component/auth/LogIn';
import CreateAccount from './component/auth/CreateAccount';
import BudgetComponent from './component/budget/BudgetComponent';

import AuthState from './context/auth/authState'
import AlertState from './context/alert/alertState'
import BudgetState from './context/records/budgetState'

import PrivateRoute from './component/route/PrivateRoute'


function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    
    <AlertState>
      <AuthState>
        <BudgetState>
          <Router>
            <Switch>
              <Route exact path="/" component={LogIn}/>
              <Route exact path="/new-account" component={CreateAccount}/>
              <PrivateRoute exact path="/budget" component={BudgetComponent}/>
            </Switch>
          </Router>
        </BudgetState>
      </AuthState> 
    </AlertState> 
  );
}

export default App;
