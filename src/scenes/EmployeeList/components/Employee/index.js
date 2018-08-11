import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { employee as employeeModel } from '../../../../models/employee'
import './Employee.css'

class Employee extends PureComponent {
  handleOnEmployeeClick = () => {
    this.props.onEmployeeClick(this.props.employee.id)
  }

  render() {
    return (
      <div className="employee">
        <div className="employee-wrapper">
          <a className="mail" href={`mailto:${this.props.employee.mail}`} />
          <div className="avatar" onClick={this.handleOnEmployeeClick}>
            <img src={this.props.employee.avatar} />
          </div>
          <div className="info">
            <span className="name" onClick={this.handleOnEmployeeClick}>{this.props.employee.name}</span>
            <span className="role" onClick={this.handleOnEmployeeClick}>{this.props.employee.role}</span>
            <span className="city" onClick={this.handleOnEmployeeClick}>{this.props.employee.city}</span>
          </div>
        </div>
      </div>
    )
  }
}

Employee.propTypes = {
  employee: employeeModel.isRequired,
  onEmployeeClick: PropTypes.func.isRequired
}

export default Employee
