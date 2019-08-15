import React, { Component } from "react";

export class Welcome extends Component {
  render() {
    return (
      <div>
        <p>Welcome {this.props.match.params.name} to demo site</p>
      </div>
    );
  }
}

export default Welcome;
