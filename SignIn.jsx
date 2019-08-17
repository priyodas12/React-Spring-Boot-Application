import React, { Component } from "react";
import Authentication from "./Authentication.js";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false
    };

    this.changeInputParamHandler = this.changeInputParamHandler.bind(this);
  }

  changeInputParamHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };
  submitHandler = e => {
    if (
      this.state.username === "priyodas12@gmail.com" &&
      this.state.password === "1234"
    ) {
      Authentication.registerSuccessFullogin(
        this.state.username,
        this.state.password
      );
      this.props.history.push(`/welcome/${this.state.username}`);
      this.setState({ hasLoginFailed: false, showSuccessMessage: true });

      console.log("Successful!", this.state);
    } else {
      this.setState({ hasLoginFailed: true, showSuccessMessage: false });
      console.log("Failed!!", this.state);
    }
  };

  render() {
    return (
      <div className="md-form ">
        <h1>Login Here</h1>
        <div className="container">
          {this.state.showSuccessMessage && (
            <div className="alert alert-warning">Login Successful!</div>
          )}
          {this.state.hasLoginFailed && <div>Invalid Credentails</div>}
          <form>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.changeInputParamHandler}
            />
            <br />
            <br />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.changeInputParamHandler}
            />
            <br />
            <br />
            <label>
              <button
                type="submit"
                className="btn btn-outline-success"
                onClick={this.submitHandler}
              >
                Submit
              </button>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
