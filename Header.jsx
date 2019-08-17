import React, { Component } from "react";
import { Link } from "react-router-dom";
import SessionLogout from "./Authentication.js";
import { withRouter } from "react-router";

export class Header extends Component {
  render() {
    const isUserLogged = SessionLogout.isUserLoggedIn();
    console.log(isUserLogged);

    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div>
            <a
              className="navbar-brand"
              href="www.linkedin.com/in/priyobrato-das-0a286081/"
            >
              Priyobrato Das
            </a>
          </div>
          <ul className="navbar nav">
            {isUserLogged && (
              <li className="nav-link">
                <Link className="nav-link" to="/welcome/priyodas12@gmail.com">
                  Home
                </Link>
              </li>
            )}
            {isUserLogged && (
              <li className="nav-link">
                <Link className="nav-link" to="/todo">
                  Todo list
                </Link>
              </li>
            )}
            <li className="nav-link">Github</li>
          </ul>
          <ul className="navbar nav navbar-collapse justify-content-end">
            {!isUserLogged && (
              <li className="nav-link">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {isUserLogged && (
              <li className="nav-link">
                <Link
                  className="nav-link"
                  to="/logout"
                  onClick={SessionLogout.logout}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
