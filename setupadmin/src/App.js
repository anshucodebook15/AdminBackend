import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Notfound from "./Pages/Notfound";
import "./App.css";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/users" component={Users} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/*" component={Notfound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
