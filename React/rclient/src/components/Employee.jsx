import React, { Component } from "react";
import propTypes from "prop-types";

export class Employee extends Component {
  render() {
    //const {id} = this.props.employee; // de-structuring
    return (
        <React.Fragment>
        <tr>
        <td>{this.props.employee.Id}</td>
        <td>{this.props.employee.FirstName}</td>
        <td>{this.props.employee.LastName}</td>
        <td>{this.props.employee.Designation}</td>
        <td>{this.props.employee.Location}</td>
        <td><input className="btn btn-danger" type="button" value="X" onClick={this.props.deleteEmployee.bind(this, this.props.employee.Id)}/></td>
        </tr>
        </React.Fragment>

    );
  }
}

// Prop-Types
Employee.propTypes = {
  employee: propTypes.object.isRequired
};

//Styles

export default Employee;
