import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button'

import Typography from '@material-ui/core/Typography';
// import { Grid, Paper } from '@material-ui/core';
import { Card, CardBody, CardFooter } from '@material-ui/core';

// import withStyles from "@material-ui/core/styles/withStyles"

const styles = {
fullHeightCard: {
    height: '100%',
    backgroundColor: 'purple',
    },
}

// const useStyles = makeStyles({
//     root: {
//         maxWidth: 200,
//         background: 'rgba(0,0,0,0.3)',
//         margin: '5px',
//         color: '#fff',
//         // display: 'flexbox',
//         // alignItems: 'flext-start',
//         // flexGrow: '1',
//     },
//     cardpos: {
//         display: 'flex',
//     },
//     media: {
//         backgroundImage: '',
//     },

//     content: {
//         color: '#fff',
//         fontSize: '9px',
//         height: '150px',
//     },
//     btnfoot: {
//         fontColor: '#ffeb3b',
//     },


// });

const Projects = props => {
    const {classes} = props
    const { title, description, imageUrl, demoSrc, gitSrc } = props;

    return (
        <>
             
                <Card > 

                    <CardActionArea>


                        <CardMedia style={{ height: "150px" }} image={imageUrl} />
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <div>
                        <CardActions >
                            <Button size="small" color="primary" demo={demoSrc}>Demo</Button>
                            <Button size="small" color="primary" dit={gitSrc}>Code</Button>
                        </CardActions>

                    </div>

                </Card>
           
        </>
    );
}

export default Projects;