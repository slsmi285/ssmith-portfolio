import React, { Component } from 'react';
// import { render } from 'react-dom';
import Typed from 'react-typed';
import { Box, Grid } from '@material-ui/core';




class Skills extends Component {

    render() {

        return (

        
            <Box>
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="left">

                    <Typed className="titleskl"
                        strings={['SKILLS: ']}
                        typeSpeed={40}
                    />
            

                    <Typed className="skilblock"
                        strings={[
                            'Reactjs',
                            'Nodejs',
                            'Express',
                            'Javascript',
                            'JQuery',
                            'Handlebars',
                            'MongoDB',
                            'MySql',
                            'Firebase',
                            'Heroku',
                            'MERN',
                            'HTML/CSS',
                            'Bootstrap',
                            'Git',
                            'Passport',
                            'Material-ui',
                            'Algorithms',
                            'Big O Notation']}
                        typeSpeed={60}
                        backSpeed={50}
                        // attr="placeholder"
                        loop >
                        <input style={{ backgroundColor:'transparent', borderColor: 'hidden', color: 'white', fontSize: '18px', hover: 'hidden' }} type="text" />
                    </Typed>
                </Grid>

            </Box>
        );
    }
}

// render(
//     <myComponent/>,
//     document.getElementById('app'),
// );

export default Skills;