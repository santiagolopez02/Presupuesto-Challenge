import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={LogIn}/>
          <Route exact path="/" component={CreateAccount}/>
          <Route exact path="/" component={Budget}/>
        </Switch>
      </Router>
  );
}

export default App;
