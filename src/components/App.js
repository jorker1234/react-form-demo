import React from "react";
import { Router, Route } from "react-router-dom";

import Register from "./Register";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Route path="/" component={Home} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </div>
  );
};

export default App;
