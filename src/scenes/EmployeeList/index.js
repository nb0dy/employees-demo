import React, { PureComponent } from 'react';
import Employee from './components/Employee'
import employees from './../../store/employee'
import './EmployeeList.css'

class EmployeeList extends PureComponent {
  state = {
    employees: employees
  }

  onEmployeeClick = id => {
    this.props.history.push(`member/${id}`)
  }

  render() {
    return (
      <div className="employee-list">
        <section className="wrapper">
          <header>
            <h1>Meet our team</h1>
          </header>
          <div className="employees">
            {this.state.employees.map(employee => (
              <Employee key={employee.id} employee={employee} onEmployeeClick={this.onEmployeeClick}/>
            ))}
          </div>
        </section>
      </div>
    )
  }
}

export default EmployeeList;
