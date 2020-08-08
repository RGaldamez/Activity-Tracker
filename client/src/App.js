import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import CheckConnection from "./components/CheckConnection";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/check' component={CheckConnection} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
