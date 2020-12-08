import React, { Component } from 'react';
import { Grid, Cell, Col, List, ListItem } from 'react-mdl';
import Headshot from '../assets/Headshot.png';
//import Carousel from 'react-mdl';

class About extends Component {
    render() {
        return (
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={4} className="profile">
                        <img src={Headshot} alt="headshot" />
                    </Cell>
                    <Cell col={8}>
                        <div className="about-header">
                            <h3>Hi! I am Sandy Smith!</h3>
                        </div>
                        <div>
                            <List>
                                <ListItem className="about-data">
                                    <ul>
                                        <li>Web Developer</li>
                                        <li>Fine Art Photographer</li>
                                        <li>Gardener</li>
                                        <li>East Tennessean</li>
                                    </ul>
                                </ListItem>

                            </List>


                        </div>
                        <div>
                            <p className="about-content">
                                While finishing my Bachelor's of Science Degree in Business Management with Western Governor's University, I had realized in my
                                final semester that aI wanted to get into coding.  I had always wanted to get into coding, but
                                was always pulled into other directions.  I finally followed my dream, and recently completed
                                Vanderbilt University's Full Stack Web Developer Bootcamp. WGU required nothing less than a B in each subject, I finished with
                                a B+, and A with Vanderbilt University.<br />
                                <br />
                                My coding skillset includes: HTML5/CSS3, Javascript, jQuery, Bootstrap, Firebase, Node.js, MySQL, Express,
                                Handlebars, Github, APIs, REST, AJAX, Media Queries, JSON, React.js, and terminal commands.
                                Other skillsets includes: Corel, LightRoom, Adobe Photoshop, various film and digital
                                cameras, mareketing, sales, payroll, Human Resources, Oracle, PeopleSoft and Microsoft Office Suite. <br />
                                <br />
                                I have experience with working in teams, collaborating and contributing with various levels of team members within a company, and always have
                                the 'can do attitude'. With my past work history, I can work independently, or work in a team environment either face to face or remote. <br />
                                <br />
                                While I love to venture away from home when vacationing, I do enjoy being at home during my downtime.  I can be found doing any of the following: Photographing and
                                print enhancing, Cooking and entertaining, Writing, Gardening, and playing with my muse - my beloved dogs. <br />

                            </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;