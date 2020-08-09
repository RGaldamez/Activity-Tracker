import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VerifyAuth from "./middleware/VerifyAuth";
import CheckConnection from "./middleware/CheckConnection";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={VerifyAuth} />
        <Route exact path='/check' component={CheckConnection} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
