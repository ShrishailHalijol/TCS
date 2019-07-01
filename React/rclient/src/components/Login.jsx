import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";

import { login, closeError } from "../Ajax.js";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  render() {
    if (this.state.redirect === false) {
      return (
        <div align="center">
          <div>
            <div className="col-md-5 col-md-offset-3">
              <div className="well">
                <table className="table table-bordered">
                  <thead>
                    <tr className="success">
                      <td colSpan="2" className="text-center">
                        Login
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Email:</td>
                      <td>
                        <input
                          type="text"
                          id="txtEmail"
                          placeholder="Email Address"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Password:</td>
                      <td>
                        <input
                          type="password"
                          id="txtPassword"
                          placeholder="Password"
                        />
                      </td>
                    </tr>
                    <tr className="success">
                      <td>
                        <NavLink to="/register">
                          <input
                            type="button"
                            id="btnLogin"
                            className="btn btn-success"
                            value="Register"
                          />
                        </NavLink>
                      </td>
                      <td>
                        <input
                          type="button"
                          id="btnLogin"
                          className="btn btn-success"
                          value="Login"
                          onClick={login}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div id="divError" className="alert alert-danger collapse">
                  <a
                    id="linkClose"
                    className="close"
                    onClick={closeError}
                    href="#"
                  >
                    &times;
                  </a>
                  <div id="divErrorMessage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect push to="/Employees" />;
    }
  }
}
