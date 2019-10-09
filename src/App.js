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

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div className="App">
          <Header />
          {/* <Header /> */}
          <Route path="/home/" exact component={Home} />
          <Route path="/cards/" exact component={Cards} />
          <Route path="/ComingSoon/" exact component={ComingSoon} />
          <Route path="/crosswordPuzzle/" exact component={CrosswordPuzzle} />
          <Route path="/otherGames/" exact component={OtherGames} />
          <Route path="/pictures/" exact component={Pictures} />
          <Route path="/sentences/" exact component={Sentences} />
          <Route path="/stories/" exact component={Stories} />
          {/* <Route path="/flights/search" exact component={FlightsSearch} />
          <Route path="/flights/:userId(\d+)" component={Flights} /> */} 
{/* 
          <Route path="/login/renderer/" exact component={Renderer} /> */}
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
