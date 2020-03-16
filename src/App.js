import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Listing from '../src/pages/Listing';
import Details from '../src/pages/Details';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Listing} />
        <Route path="/:products/:id" exact component={Details} />
      </div>
    </Router>
  );
}

export default App;
