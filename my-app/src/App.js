//import sunrise from './sunrise.svg';
//import './App.css';
//import Hero from './components/Hero';
//import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
//import Modal from ".components/Modal";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";





function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Wrapper>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      </Wrapper>
   
        
      
    </div>
    </Router>
  );
}

export default App;
