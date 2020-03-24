import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PageHeader from './components/PageHeader'
import Home from './containers/Home'
import About from './containers/About'
import AddMemberForm from './components/AddMemberForm'
import HeraldryForm from './components/HeraldryForm'

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
