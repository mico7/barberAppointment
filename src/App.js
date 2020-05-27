import React from 'react';
import './App.scss';

import HomePage from "./pages/HomePage/HomePage";
import complete from "./pages/complete/complete"

import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/complete" component={complete}/>
        
      

      </Switch>
    </div>
  );
}

export default App;
