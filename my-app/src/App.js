//import sunrise from './sunrise.svg';
//import './App.css';
//import Hero from './components/Hero';
//import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Discover from "./pages/Discover";
import About from "./pages/About";
//import Search from "./pages/Search";
import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";




function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Wrapper>
      <Route exact path="/" component={About} />
      </Wrapper>
   
        
      
    </div>
    </Router>
  );
}

export default App;
