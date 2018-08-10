import React, { PureComponent } from 'react';
import employees from './../../store/employee'

class EmployeeDetails extends PureComponent {
  state = {
    employee: employees.find(employee => employee.id === parseInt(this.props.match.params.id) )
  }

  minId = employees.reduce((prev, curr) => prev.id < curr.id ? prev : curr).id

  maxId = employees.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id

  prev = () => {
    let prevId = this.state.employee.id - 1
    if (prevId < this.minId) prevId = this.minId
    this.goToMember(prevId)
  }

  next = () => {
    let nextId = this.state.employee.id + 1
    if (nextId > this.maxId) nextId = this.maxId
    this.goToMember(nextId)
  }

  goToMember = memberId => this.props.history.push(`member/${memberId}`)

  render() {
    console.log('state', this.minId, this.maxId)
    if (!this.state.employee) return
    return (
      <div>
        <div className="prev" onClick={this.prev} />
        <div className="info">
          <div className="role">{this.state.employee.role}</div>
          <div className="name">{this.state.employee.name}</div>
        </div>
        <div className="next" onClick={this.next} />
      </div>
    )
  }
}

export default EmployeeDetails
