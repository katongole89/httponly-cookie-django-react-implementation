import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={Login} />
          {/* <Route path='/searchable-dropdown' component={SearchableDropdown} />
          <Route path='/simple-to-do' component={SimpleToDo} />
          <Route path='/hooks' component={Hooks} />
          <Route path='/recapture' component={TestRecaptcha} />
          <Route path='/funk-component' component={FunkComponent} /> */}
      </Switch>
    </Router>
    
    
  )
}

export default App
