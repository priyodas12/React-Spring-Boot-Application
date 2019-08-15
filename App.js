import React from "react";
import "./App.css";
import Signin from "./Components/SignIn";
import Welcome from "./Components/Welcome";
import Error from "./Components/Error";
import ToDo from "./Components/ListTodoComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Switch>
            <Route path="/" exact component={Signin} />
            <Route path="/login" component={Signin} />
            <Route path="/todo" component={ToDo} />
            <Route path="/welcome/:name" component={Welcome} />
            <Route component={Error} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
