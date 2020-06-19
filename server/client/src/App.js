import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css"
import Home from "./pages/Home"
// import About from "./pages/About"
// import Projects from "./pages/Projects"
// import Contact from "./pages/Contact"



// Here is where we implement our browser router 
// and assign our components to our paths within our app
function App() {
  return (

    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/About' exact component={About} />
        <Route path='/Projects' exact component={Projects} />
        <Route path='/Contact' exact component={Contact} /> */}
      </Switch>
    </Router>
  );
}

export default App;
