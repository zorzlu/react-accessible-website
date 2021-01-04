import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Events, SingleEvent } from "./components";

function App() {
  return (
    <div className="App">
       <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/events" exact component={() => <Events />} />
          <Route path="/singleEvent" exact component={() => <SingleEvent />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
