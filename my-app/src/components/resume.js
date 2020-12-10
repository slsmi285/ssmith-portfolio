import React, { Component } from 'react';
import { Grid, Cell, List } from 'react-mdl';
import Education from './education';
import Experience from './experience';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>

                        <div style={{ textAlign: 'center', ml: '20px' }}></div>

                        <h2 style={{ paddingTop: '2em', font: 'bold', color: 'black' }}>Sandra Smith</h2>
                        <h4 style={{ color: 'grey' }}>Full Stack Web Developer</h4>
                        <hr style={{ borderTop: '3px solid #008080', width: '50%' }} />
                        <p>Photographer/Artist to Code</p>
                        <hr style={{ borderTop: '3px solid #008080', width: '50%' }} />
                        <h5>Based/Located</h5>
                        <p>Maryville, Tennesse</p>
                        <h5>Phone</h5>
                        <p>(865) 696-1106</p>
                        <h5>Email</h5>
                        <p>sls2code@gmail.com</p>
                        {/* <h5>Web</h5>
                        <p>github</p> */}
                        <hr style={{ borderTop: '3px solid #008080', width: '50%' }} />

                    </Cell>
                    <Cell col={8}>
                        <div className="resume-right-col">
                            <h3>Education</h3>
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
                            <hr style={{ borderTop: '3px solid #008080' }} />
                            <h3>Experience</h3>

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
                            <Experience
                                startYear={2006}
                                endYear={2011}
                                jobName="Verizon Wireless"
                                jobDescription="B2B Sales Representative"
                            />
                            <Experience
                                startYear={1994}
                                endYear={2015}
                                jobName="Wedding Photographer"
                                jobDescription="Self-Employed/Owned Business"
                            />
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;