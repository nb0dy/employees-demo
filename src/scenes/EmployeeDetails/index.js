import React, { PureComponent } from 'react';
import employees from './../../store/employee'
import './EmployeeDetails.css'

class EmployeeDetails extends PureComponent {
  minId = employees.reduce((prev, curr) => prev.id < curr.id ? prev : curr).id

  maxId = employees.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id

  handlePrevButtonClick = () => {
    let prevId = parseInt(this.props.match.params.id) - 1
    if (prevId < this.minId) prevId = this.maxId
    this.goToMember(prevId)
  }

  handleNextButtonClick = () => {
    let nextId = parseInt(this.props.match.params.id) + 1
    if (nextId > this.maxId) nextId = this.minId
    this.goToMember(nextId)
  }

  handleCloseButtonClick = () => {
    this.props.history.push('/')
  }

  goToMember = memberId => this.props.history.push(`/member/${memberId}`)

  render() {
    const employee = employees.find(employee => employee.id === parseInt(this.props.match.params.id))

    if (!employee) return
    return (
      <div className="employee-details">
        <div className="employee-details-wrapper">
          <div className="prev" onClick={this.handlePrevButtonClick} />
          <div className="info">
            <div className="role">{employee.role}</div>
            <div className="name">{employee.name}</div>
          </div>
          <div className="next" onClick={this.handleNextButtonClick} />
          <div className="close" onClick={this.handleCloseButtonClick} />
        </div>
      </div>
    )
  }
}

export default EmployeeDetails
