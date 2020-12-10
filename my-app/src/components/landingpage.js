import React, { Component } from 'react';
import { Grid, Cell, List, ListItem } from 'react-mdl';
import profile from "../assets/profile.jpg";

class Landing extends Component {
  render() {
    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="profile-landing">
              <img src={profile} alt="profile"
                style={{ height: '200px', width: '175px'}}
              />
            </div>
            <div className="banner-text">
              <h2>Full Stack Web Developer</h2>

              <hr />
              <div className="skill-lists">
                <h3>Skills</h3>


                <div style={{ width: '80%', margin: 'auto' }}>
                  <Grid>
                    <Cell col={12}>
                     <p>HTML5 | CSS3 | BOOSTRAP | JAVASCRIPT | REACT | NODEJS | EXPRESS | MYSQL | MONGODB | APIs | FIREBASE</p> 

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