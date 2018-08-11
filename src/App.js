import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EmployeeList from './scenes/EmployeeList'
import EmployeeDetails from './scenes/EmployeeDetails'
import 'reset-css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={EmployeeList} />
          <Route path="/member/:id" component={EmployeeDetails} />
        </div>
      </Router>
    )
  }
}

export default App;
