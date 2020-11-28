//import sunrise from './sunrise.svg';
//import './App.css';
import Hero from '../components/Hero';
//import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <Hero backgroundImage="./sunrise.jpg">
            {/* <img src={sunrise} className="App-img" alt="sunrise" /> */}
            <div>
                <p>
                    Hi! I am Sandy Smith. <br />
      Web Developer. <br />
      Artist.
     </p>
            </div>
            {/* <a
       className="App-link"
       href="https://reactjs.org"
       target="_blank"
       rel="noopener noreferrer"
     >
       Learn React
     </a> */}
        </Hero>
    );
}
export default About;