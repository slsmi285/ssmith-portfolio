import React, { Component } from 'react';
import { Grid, Cell, List, ListItem } from 'react-mdl';
//import Skills from './skills'

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://th.bing.com/th/id/OIP.rH3MBj2O3hG3ytnIlo2LlgHaHa?w=207&h=207&c=7&o=5&pid=1.7g"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h2>Full Stack Web Developer</h2>

              <hr />
              <div className="skill-lists">
                <h3>Skills</h3>
                

                <div style={{ width: '80%', margin: 'auto' }}>
                  <Grid className="demo-grid-ruler">
                    {/* <Cell col={1}></Cell> */}
                    <Cell col={2}></Cell>
                    <Cell col={1}>
                      <i className="fa fa-briefcase" aria-hidden="true" />
                      <p>BACK-END TECHNOLOGY</p><br/>
                      <p>Node.js, Express Servers, APIs</p>
                    </Cell>
                    {/* <Cell col={1}></Cell> */}
                    <Cell col={1}></Cell>
                    <Cell col={1}>
                      <i className="fa fa-window-restore" aria-hidden="true" />
                      <p>UI/UX DESIGN</p><br/>
                      <p>HTML5/CSS3, Bootstrap, React.js</p>
                    </Cell>
                    <Cell col={1}></Cell>
                    
                    <Cell col={1}>
                      <i className="fa fa-database" aria-hidden="true" />
                      <p>DATABASE</p><br/>
                      <br/>
                      <p>MySql, MongoDB, Firebase</p>
                    </Cell>
                    <Cell col={1}></Cell>
                    <Cell col={1}>
                      <i className="fa fa-puzzle-piece" aria-hidden="true" />
                      <p>PROBLEM SOLVING & TEAM ORIENTED</p>
                      <p>I love to solve a puzzle & experienced team player</p>
                    </Cell>
           
                  </Grid>
                </div>
              </div>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="http://github.com/slsmi285" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                  {/* Email */}
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>


              </div>
            </div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Landing;