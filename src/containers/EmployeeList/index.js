import React, { PureComponent } from 'react';
import Employee from './../../components/Employee'
import employess from './../../store/employee'

class Employees extends PureComponent {
  state = {
    employees: employess
  }

  onEmployeeClick = id => {
    this.props.history.push(`member/${id}`)
  }

  render() {
    return this.state.employees.map(employee => <Employee employee={employee} onEmployeeClick={this.onEmployeeClick}/>)
  }
}

export default Employees;
