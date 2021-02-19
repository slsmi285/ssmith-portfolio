import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button'


import Typography from '@material-ui/core/Typography';

import { Card } from '@material-ui/core';



// const styles = {
// fullHeightCard: {
//     height: '100%',
//     backgroundColor: 'purple',
//     },
// }



const Projects = props => {
    // const {classes} = props
    const { title, description, imageUrl, demoSrc, gitSrc } = props;

    return (
        <>
                <Card > 
                    <CardActionArea>
                        <CardMedia image={ imageUrl } style={{ height: "140px" }}  />
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
                            <Button target="_blank" href={demoSrc}>Demo</Button>
                            <Button target="_blank" href={gitSrc}>Code</Button>
                        </CardActions>
                    </div>
                </Card>
        </>
    );
}

export default Projects;