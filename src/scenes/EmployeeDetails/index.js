import React, { PureComponent } from 'react';
import employees from './../../store/employee'
import { TransitionGroup, CSSTransition }from "react-transition-group";
import './EmployeeDetails.css'

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children)
  return childrenArray[0] || null
}

class EmployeeDetails extends PureComponent {
  minId = employees.reduce((prev, curr) => prev.id < curr.id ? prev : curr).id

  maxId = employees.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id

  handlePrevButtonClick = () => {
    let prevId = parseInt(this.props.match.params.id) - 1
    if (prevId < this.minId) prevId = this.maxId
    this.goToEmployee(prevId)
  }

  handleNextButtonClick = () => {
    let nextId = parseInt(this.props.match.params.id) + 1
    if (nextId > this.maxId) nextId = this.minId
    this.goToEmployee(nextId)
  }

  handleCloseButtonClick = () => {
    this.props.history.push('/')
  }

  goToEmployee = employeeId => this.props.history.push(`/employee/${employeeId}`)

  render() {
    const employee = employees.find(employee => employee.id === parseInt(this.props.match.params.id))

    if (!employee) return
    return (
      <div className="employee-details">
        <div className="employee-details-wrapper">
          <div className="prev" onClick={this.handlePrevButtonClick} />
          <TransitionGroup component={firstChild}>
            <CSSTransition
              key={employee.id}
              timeout={300}
              classNames="fade">
              <div className="info">
                <div className="role">{employee.role}</div>
                <div className="name">{employee.name}</div>
              </div>
            </CSSTransition>
          </TransitionGroup>
          <div className="next" onClick={this.handleNextButtonClick} />
          <div className="close" onClick={this.handleCloseButtonClick} />
        </div>
      </div>
    )
  }
}

export default EmployeeDetails
