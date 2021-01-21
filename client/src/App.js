import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LogIn from './component/LogIn';
import CreateAccount from './component/CreateAccount';
import BudgetComponent from './component/BudgetComponent';


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={LogIn}/>
          <Route exact path="/new-account" component={CreateAccount}/>
          <Route exact path="/budget" component={BudgetComponent}/>
        </Switch>
      </Router>
  );
}

export default App;
