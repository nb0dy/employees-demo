import React, { PureComponent } from 'react';
import employees from './../../store/employee'
import './EmployeeDetails.css'

class EmployeeDetails extends PureComponent {
  state = {
    employee: employees.find(employee => employee.id === parseInt(this.props.match.params.id) )
  }

  minId = employees.reduce((prev, curr) => prev.id < curr.id ? prev : curr).id

  maxId = employees.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id

  handlePrevButtonClick = () => {
    let prevId = this.state.employee.id - 1
    if (prevId < this.minId) prevId = this.minId
    this.goToMember(prevId)
  }

  handleNextButtonClick = () => {
    let nextId = this.state.employee.id + 1
    if (nextId > this.maxId) nextId = this.maxId
    this.goToMember(nextId)
  }

  handleCloseButtonClick = () => {
    this.props.history.push('/')
  }

  goToMember = memberId => this.props.history.push(`/member/${memberId}`)

  render() {
    console.log('state', this.minId, this.maxId)
    if (!this.state.employee) return
    return (
      <div className="container">
        <div className="wrapper">
          <div className="prev" onClick={this.handlePrevButtonClick} />
          <div className="info">
            <div className="role">{this.state.employee.role}</div>
            <div className="name">{this.state.employee.name}</div>
          </div>
          <div className="next" onClick={this.handleNextButtonClick} />
          <div className="close" onClick={this.handleCloseButtonClick} />
        </div>
      </div>
    )
  }
}

export default EmployeeDetails
