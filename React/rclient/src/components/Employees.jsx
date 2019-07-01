import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Employee from "./Employee";
import AddEmployee from "./AddEmployee";
import { logOut, postEmployee, deleteEmployee, getEmployees } from "../Ajax.js";

class Employees extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    getEmployees(this.updateData);
  }

  updateData = data => {
    this.setState({ employees: data });
  };

  // Add employee
  addEmployee = employee => {
    postEmployee(employee, this.postCallback);
  };

  postCallback = response =>{
    const emp = {
      Id: response.Id,
      FirstName: response.FirstName,
      LastName: response.LastName,
      Designation: response.Designation,
      Location: response.Location
    }

    this.setState({
      employees: [...this.state.employees, emp]
    });
  };

  // Delete employee
  deleteEmployee = id => {
    deleteEmployee(id);
    this.setState({
      employees: [...this.state.employees.filter(emp => emp.Id !== id)]
    });
  };

  // logout
  logout = () => {
    logOut();
  };

  render() {
    return (
      <div style={{ align: "center" }}>
        <AddEmployee addEmployee={this.addEmployee} logout={this.logout} />
        <table
          style={{ marginTop: "10px", align: "center" }}
          className="table table-stripped "
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Designation</th>
              <th>Location</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(emp => (
              <Employee
                key={emp.Id}
                employee={emp}
                deleteEmployee={this.deleteEmployee}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Employees;
