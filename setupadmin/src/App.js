import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Notfound from "./Pages/Notfound";

// Protected Routes
import { Protected } from "./Routes/Protected";

// Import Provider
import { AuthProvider } from "./Contexts/authContext";

import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Protected path="/dashboard" component={Dashboard} />
            <Protected path="/users" component={Users} />
            <Route path="/*" component={Notfound} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
