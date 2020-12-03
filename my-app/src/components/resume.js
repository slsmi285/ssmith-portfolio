import React, { Component } from 'react';
import { Grid, Cell, List} from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Sandra Smith</h2>
                        <h4 style={{color: 'grey'}}>Web Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem epsom....</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>1548 Candy Cane Lane, North Pole, NP 11111</p>
                        <h5>Phone</h5>
                        <p>(865) 696-1106</p>
                        <h5>Email</h5>
                        <p>toosandra@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                            </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                        startYear={2020}
                        endYear={2020}
                        schoolName="Vanderbilt University"
                        schoolDescription="Full Stack Coding Bootcamp"
                        />
                         
                        <Education 
                        startYear={2015}
                        endYear={2018}
                        schoolName="Western Governors University"
                        schoolDescription="Bachelors of Science in Business Management Administration"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Experience</h2>

                        <Experience 
                        startYear={2018}
                        endYear={2020}
                        jobName="Marriott International"
                        jobDescription="Sr Administrative Assistant"
                        />

<Experience 
                        startYear={2013}
                        endYear={2018}
                        jobName="Accenture LLC"
                        jobDescription="Executive Assistant"
                        />





                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;