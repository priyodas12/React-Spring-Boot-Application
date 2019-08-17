import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <p>Welcome {this.props.match.params.name} to demo site</p>
        <p>
          You can manage your todo <Link to="/todo">Here</Link>
        </p>
      </div>
    );
  }
}

export default Welcome;
