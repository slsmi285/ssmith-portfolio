import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import { Collapse } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
// import { IconButton } from '@material-ui/core';
import { Grid, Paper } from '@material-ui/core';





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
    // const classes = useStyles();
    const { title, description, imageSrc, demoSrc, gitSrc } = props;

    return (
        <>
            <Grid container xs={12} sm={4}
                spacing={3}
                direction="row"
                justify="space-evenly"
                alignItems="flex-start">
                <Card style={{ margin: "20px" }}> 

                    <CardActionArea>


                        <CardMedia style={{ height: "140px" }} image={imageSrc} />
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
            </Grid>

        </>
    );
}

export default Projects;