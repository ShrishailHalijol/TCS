import React, { Component } from "react";
import {
  register,
  closeError,
} from "../Ajax.js";

export default class Register extends Component {
  render() {
    return (
      <div align="center">
        <div className="col-md-5 col-md-offset-3">
          <div className="well">
            <table className="table table-bordered">
              <thead>
                <tr className="success">
                  <td colSpan="2" className="text-center">
                    Register
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
                <tr>
                  <td>Confirm Password:</td>
                  <td>
                    <input
                      type="password"
                      id="txtConfirmPassword"
                      placeholder="Confirm Passsword"
                    />
                  </td>
                </tr>
                <tr className="success">
                  <td />
                  <td>
                    <input
                      type="button"
                      id="btnRegister"
                      className="btn btn-success"
                      value="Register"
                      onClick={register}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              className="modal fade"
              tabIndex="-1"
              id="modelSuccess"
              data-keyboard="false"
              data-backdrop="static"
            >
              <div className="modal-dialog modal-sm">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                    <h5>Success</h5>
                  </div>
                  <div className="modal-body">
                    <h4>User registered successfully!</h4>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-success"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div id="divError" className="alert alert-danger collapse">
              <a id="linkClose" className="close" onClick={closeError} href="#">
                &times;
              </a>
              <div id="divErrorMessage" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

