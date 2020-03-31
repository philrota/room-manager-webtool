import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './pages/home';
import Database from './pages/database'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/db" component={Database} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
