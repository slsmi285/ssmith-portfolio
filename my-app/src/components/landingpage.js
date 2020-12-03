import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './skills';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100', margin: 'auto'}}>
              <Grid className="landing-grid">
                <Cell col={12}>
                  <img 
                  src="https://th.bing.com/th/id/OIP.rH3MBj2O3hG3ytnIlo2LlgHaHa?w=207&h=207&c=7&o=5&pid=1.7g"
                  alt="avatar"
                  className="avatar-img"
                  />
                  <div className="banner-text">
                    <h1>Full Stack Web Developer</h1>

                    <hr/>
                    <h2>Skills</h2>
                    <Skills 
                    skill="Back-End Technology (Node.js, Express Servers, APIs"
                    
                    skill="UI/UX Design (HTML5/CSS3, Bootstrap, React.js"
                    skill="Databases (MySql, MongoDB, Firebase)"
                    skill="Problem Solving (I love to solve puzzles)"
                    skill="Team Oriented (Experienced team player, ready to contribute and collaborate)"
                    
                    />
                    <div className="social-links">

                      {/* LinkedIn */}
                      <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                      </a>

                      {/* Github */}
                      <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
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