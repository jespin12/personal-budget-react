import React, {useState} from 'react';
import './App.css';
import Chart from 'chart.js';
import axios from 'axios';



import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import Homepage from './Homepage/Homepage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import ChartFile from './ChartFile/ChartFile';

function App() {
  //const [currentState, setState] = useState();

  return (
    <Router>
      <Menu/>
      <Hero/>
      {/* <ChartFile/> */}
      <div className="mainContainer">
        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/">
            <Homepage/>
          </Route>
          <Route path="/">
            <ChartFile/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
