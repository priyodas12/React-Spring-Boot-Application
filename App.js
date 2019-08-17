import React from "react";
import "./App.css";
import Signin from "./Components/SignIn";
import Welcome from "./Components/Welcome";
import Error from "./Components/Error";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ToDo from "./Components/ListTodoComponent";
import Logout from "./Components/Logout";
import AuthenticatedRoute from "./Components/AuthenticatedRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./bootstrap.css";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={Signin} />
            <Route path="/login" component={Signin} />
            <AuthenticatedRoute path="/logout" component={Logout} />
            <AuthenticatedRoute path="/todo" component={ToDo} />
            <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </>
      </Router>
    </div>
  );
}

export default App;
