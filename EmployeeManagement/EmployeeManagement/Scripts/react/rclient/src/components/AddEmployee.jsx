import React, { Component } from "react";

export default class AddEmployee extends Component {
  state = {
    FirstName: "",
    LastName: "",
    Designation: "",
    Location: ""
  };


  onAddEmployee = e => {
    e.preventDefault();
    this.props.addEmployee(this.state);
    this.setState({
      FirstName: "",
      LastName: "",
      Designation: "",
      Location: ""
    });
  };

  onTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <form
          style={{ background: "#f4f4f4", margin: "5px" }}
          onSubmit={this.onAddEmployee}
        >
          <table className="table table-responsive">
            <tbody>
              <tr>
                <td style={{ fontWeight: "bold" }}>Add New Employee :</td>
                <td>
                  <input
                    name="FirstName"
                    style={textStyle}
                    type="text"
                    placeholder="First Name"
                    value={this.state.FirstName}
                    onChange={this.onTextChange}
                  />
                </td>
                <td>
                  <input
                    name="LastName"
                    style={textStyle}
                    type="text"
                    placeholder="Last Name"
                    value={this.state.LastName}
                    onChange={this.onTextChange}
                  />
                </td>
                <td>
                  <input
                    name="Designation"
                    style={textStyle}
                    type="text"
                    placeholder="Designation"
                    value={this.state.Designation}
                    onChange={this.onTextChange}
                  />
                </td>
                <td>
                  <input
                    name="Location"
                    style={textStyle}
                    type="text"
                    placeholder="Location"
                    value={this.state.Location}
                    onChange={this.onTextChange}
                  />
                </td>
                <td>
                  <input
                    style={{ margin: "5px 0 5px 0" }}
                    className="btn btn-success"
                    type="submit"
                    value="Add"
                  />
                </td>
                <td>
                  <input
                    style={{ margin: "5px 0 5px 0" }}
                    className="btn btn-success"
                    type="button"
                    value="Logout"
                    onClick={this.props.logout}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </React.Fragment>
    );
  }
}

const textStyle = {
  margin: "0 5px 0 5px"
};
