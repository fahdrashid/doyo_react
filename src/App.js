import './App.css';
import React from 'react';
import Waiter from './components/Waiter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { Provider } from 'react-redux'
// import store from './store'
// import Waiter from './components/Waiter';

function App() {
  return (
    // <Provider>
    <Router>
      <Switch>
        <Route exact path='/' component={Waiter} />
      </Switch>
    </Router>
    // </Provider>
  );
}

export default App;
