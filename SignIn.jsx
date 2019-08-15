import React, { Component } from "react";

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
      this.props.history.push(`/welcome/${this.state.username}`);
      this.setState({ hasLoginFailed: false, showSuccessMessage: true });

      console.log("Successful!", this.state);
    } else {
      this.setState({ hasLoginFailed: true, showSuccessMessage: false });
      console.log("Failed!!", this.state);
    }
    e.preventDefault();
  };

  render() {
    return (
      <div className="form-group">
        {this.state.showSuccessMessage && <div>Login Successful!</div>}
        {this.state.hasLoginFailed && <div>Invalid Credentails</div>}
        <form>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.changeInputParamHandler}
            />
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.changeInputParamHandler}
            />
          </label>
          <label>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.submitHandler}
            >
              Submit
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default SignIn;
