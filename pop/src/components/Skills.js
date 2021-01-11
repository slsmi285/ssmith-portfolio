import React, { Component } from 'react';
// import { render } from 'react-dom';
import Typed from 'react-typed';
import { Box, Grid } from '@material-ui/core';




class Skills extends Component {

    render() {

        return (

        
            <Box className="skillSet">
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">

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
                        typeSpeed={40}
                        backSpeed={60}
                        // attr="placeholder"
                        loop >
                        <input  type="text" />
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