import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Home from './components/home.js';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';





class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
        <Header  style={{border: '3px solid teal'}} className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Sandra Smith</Link>} scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Sandra Smith</Link>}>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Home />
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
