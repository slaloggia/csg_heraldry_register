import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <PageHeader/>
      <Router>
        <Switch>
          <Route exact path= '/' component= {Home} />
          <Route exact path= '/about' component= {About} />
          <Route exact path= '/admin/newmember' component= {AddMemberForm} />
          <Route exact path= '/member/myheraldry' component= {HeraldryForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
