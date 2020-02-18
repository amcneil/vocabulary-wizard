import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Cards from './Cards';
import ComingSoon from './ComingSoon';
import CrosswordPuzzle from './CrosswordPuzzle';
import Header from './Header';
import OtherGames from './OtherGames';
import Pictures from './Pictures';
import Sentences from './Sentences';
import Stories from './Stories';


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div className="App">
          <Header />
          <Route path="/home/" exact component={Home} />
          <Route path="/cards/" exact component={Cards} />
          <Route path="/ComingSoon/" exact component={ComingSoon} />
          <Route path="/crosswordPuzzle/" exact component={CrosswordPuzzle} />
          <Route path="/otherGames/" exact component={OtherGames} />
          <Route path="/pictures/" exact component={Pictures} />
          <Route path="/sentences/" exact component={Sentences} />
          <Route path="/stories/" exact component={Stories} />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
