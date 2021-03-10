import "./App.css";
import Home from "./Components/AppComponents/Home";
import AddForm from "./Components/AppComponents/AddForm";
import Details from "./Components/AppComponents/Details";
import EditForm from "./Components/AppComponents/EditForm";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add-form" component={AddForm} />
          <Route path="/details/:id" component={Details} />
          <Route path="/edit-form" component={EditForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
