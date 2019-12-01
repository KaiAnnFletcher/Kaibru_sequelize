import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Mission from "./pages/Mission";
import Signup from "./pages/Signup";
// import Navbar from "./components/Navbar";
// import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
    <div>
    <Wrapper>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/mission" component={Mission} />
    <Route exact path="/signup" component={Signup} />
    </Wrapper>
    </div>
    </Router>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
