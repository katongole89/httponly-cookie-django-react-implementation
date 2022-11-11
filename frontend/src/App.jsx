import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './pages/Login';
import DataPage from './pages/DataPage';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/test-data-page' component={DataPage} />
      </Switch>
    </Router>
    
    
  )
}

export default App
