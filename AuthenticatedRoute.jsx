import React, { Component } from "react";
import Authentication from "./Authentication";
import { Route, Redirect } from "react-router-dom";

export class AuthenticatedRoute extends Component {
  render() {
    if (Authentication.isUserLoggedIn()) {
      return <Route {...this.props} />;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default AuthenticatedRoute;
