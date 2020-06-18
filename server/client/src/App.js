import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css"
import Home from "./pages/Home"

// import Today from "./pages/Today"
// import Week from "./pages/Week"
// import ErrorMessage from "./pages/ErrorMessage"



// Here is where we implement our browser router 
// and assign our components to our paths within our app
function App() {
  return (

    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
