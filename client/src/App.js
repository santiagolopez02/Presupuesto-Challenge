import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LogIn from './component/auth/LogIn';
import CreateAccount from './component/auth/CreateAccount';
import BudgetComponent from './component/budget/BudgetComponent';

import AuthState from './context/auth/authState'
import AlertState from './context/alert/alertState'


function App() {
  return (
    <AlertState>
      <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component={LogIn}/>
              <Route exact path="/new-account" component={CreateAccount}/>
              <Route exact path="/budget" component={BudgetComponent}/>
            </Switch>
          </Router>
      </AuthState> 
    </AlertState> 
  );
}

export default App;
